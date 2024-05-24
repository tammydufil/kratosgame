import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { PaystackButton } from "react-paystack";
import { AES, enc } from "crypto-js";

export const Deposit = () => {
  const [amount, setamount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [fullname, setfullname] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [amountChecks, setAmountChecks] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const notify = () => toast(toastMessage);

  let secretKey = import.meta.env.VITE_APP_SECRET;
  const decryptString = (encryptedString, secretKey) => {
    try {
      const bytes = AES.decrypt(encryptedString, secretKey);
      const jsonString = bytes.toString(enc.Utf8);
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Decryption error:", error);
      return null;
    }
  };
  const getUser = () => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptString(storedUser, secretKey);
      // console.log(decryptedUser);
      setUser(decryptedUser);
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    getUser();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (toastMessage !== "") {
      console.log(toastMessage);
      notify();
      setToastMessage("");
    }
  }, [toastMessage]);

  useEffect(() => {
    if (Number(amount) < 200) {
      setAmountChecks(false);
    } else {
      setAmountChecks(true);
    }
  }, [amount]);

  function validatePassword(password) {
    // Regular expression to check if password has at least 7 alphanumerics
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;

    // Regular expression to check if password contains a symbol
    const symbolRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    // Regular expression to check if password contains a number
    const numberRegex = /\d/;

    // Check if the password meets all the criteria
    // const isAlphanumeric = alphanumericRegex.test(password);
    const hasSymbol = symbolRegex.test(password);
    const hasNumber = numberRegex.test(password);

    // Check for space
    const hasSpace = password.includes(" ");

    console.log(hasSymbol, hasNumber);

    // Return true if all conditions are met, false otherwise
    return hasSymbol && hasNumber && !hasSpace;
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!username) {
        throw new Error("Username is required");
      }
      if (!firstname) {
        throw new Error("First name is required");
      }
      if (!lastname) {
        throw new Error("Last name is required");
      }

      if (phonenumber.length !== 10) {
        throw new Error("Phone number is invalid");
      }
      if (!phonenumber) {
        throw new Error("Phone number is required");
      }
      if (!email) {
        throw new Error("Email is required");
      }
      if (!password) {
        throw new Error("Password is required");
      }

      // console.log(validatePassword(password));

      if (!validatePassword(password)) {
        throw new Error(
          "The password should be at least 6 characters long and must contain a symbol, a number, and no spaces. For example, (Abcder444&&) "
        );
      }
      if (password !== confirmpassword) {
        throw new Error("Passwords do not match");
      }

      const newData = await axios.post("http://localhost:3002/api/register", {
        firstname,
        lastname,
        country,
        phonenumber,
        email,
        username,
        password,
      });

      setToastMessage("Account created successfully");
      setLoading(false);

      setTimeout(() => {
        window.location.href = "/sign-in";
      }, 3500);
    } catch (error) {
      // console.log(error.response.data);
      setLoading(false);
      if (error?.response?.data) {
        setToastMessage(error?.response?.data);
      } else {
        setToastMessage(error.message);
      }
    }
  };

  const handlePayment = async () => {
    try {
      const newbalance = await axios.post("http://localhost:3002/api/pay", {
        id: user?.id,
        amount,
      });
      setToastMessage(`₦${amount} Deposit Successful`);
      setTimeout(() => {
        window.location.href = "/";
      }, 4200);
    } catch (error) {
      console.log(error);
    }
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: amount * 100,
    publicKey: import.meta.env.VITE_APP_KEY,
  };
  const handlePaystackSuccessAction = (reference) => {
    handlePayment();
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Proceed to payment",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div>
      <Navbar></Navbar>

      <section
        className="inner-banner bg_img"
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url("assets/images/inner-banner/bg2.jpg") top',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6 text-center">
              <h2 className="title text-white text-3xl uppercase">Deposit</h2>
              <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Deposit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* inner hero section end */}
      {/* Account Section Starts Here */}
      <section
        className="account-section overflow-hidden bg_img"
        style={{ background: "url(assets/images/account/bg.jpg)" }}
      >
        <div className="container">
          <div className="account__main__wrapper">
            <div className="account__form__wrapper sign-up">
              <div className="logo">
                <a href="/">
                  <img src="assets/images/horuslogo.png" alt="logo" />
                </a>
              </div>
              <form
                className="account__form form row g-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="lname" className="input-pre-icon">
                      <i className="las la-user" />
                    </div>
                    <input
                      id="lname"
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="Full Name"
                      disabled
                      value={`${user?.lastname?.toUpperCase()} ${user?.firstname?.toUpperCase()} `}
                      onChange={(e) => {
                        setfullname(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="email" className="input-pre-icon">
                      <i className="las la-envelope" />
                    </div>
                    <input
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="Email"
                      value={`${user?.email?.toLowerCase()} `}
                      disabled
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="username" className="input-pre-icon">
                      <i className="las la-envelope" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="Enter Amount"
                      value={amount}
                      onChange={(e) => {
                        setamount(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="flex justify-start">
                    <h4 className="text-red-200 vibrate-1 mt-2">
                      Minimum Amount is ₦200
                    </h4>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    {!loading ? (
                      amountChecks ? (
                        <PaystackButton
                          {...componentProps}
                          className="cmn--btn active w-100 btn--round"
                        />
                      ) : (
                        <button
                          onClick={() => {
                            setToastMessage(
                              "Amount should be greater than 200"
                            );
                          }}
                          className="cmn--btn active w-100 btn--round !bg-slate-400"
                        >
                          Amount should be greater than 200
                        </button>
                      )
                    ) : (
                      <button className="cmn--btn active w-100 btn--round ">
                        Loading...
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />

      <Footer></Footer>
      {/* Footer Section Ends Here */}
    </div>
  );
};
