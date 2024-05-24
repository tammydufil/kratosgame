import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { AES, enc } from "crypto-js";
import { useNavigate } from "react-router";

export const Profile = () => {
  const [username, setusername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();
  const notify = () => toast(toastMessage);

  useEffect(() => {
    if (toastMessage !== "") {
      console.log(toastMessage);
      notify();
      setToastMessage("");
    }
  }, [toastMessage]);
  function validatePassword(password) {
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;

    const symbolRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    const numberRegex = /\d/;

    const hasSymbol = symbolRegex.test(password);
    const hasNumber = numberRegex.test(password);

    const hasSpace = password.includes(" ");

    console.log(hasSymbol, hasNumber);

    return hasSymbol && hasNumber && !hasSpace;
  }
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

  return (
    <div>
      <Navbar></Navbar>
      {/* inner hero section start */}
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
              <h2 className="title text-white text-3xl uppercase">Profile</h2>
              <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Profile</li>
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
              <div className="flex justify-center mb-4">
                <img className="w-[100px]" src="assets/images/boy.png" alt="" />
              </div>
              <form
                className="account__form form row g-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="fname" className="input-pre-icon">
                      <i className="las la-user" />
                    </div>
                    <input
                      id="fname"
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="John"
                      disabled
                      value={user?.firstname?.toUpperCase()}
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="lname" className="input-pre-icon">
                      <i className="las la-user" />
                    </div>
                    <input
                      id="lname"
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="Last Name"
                      disabled
                      value={user?.lastname?.toUpperCase()}
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="country" className="input-pre-icon">
                      <i className="las la-globe" />
                    </div>
                    <select
                      className="form-select form--control style--two"
                      disabled
                    >
                      <option>Nigeria</option>
                      {/* <option>Kenya</option>
                      <option>South Africa</option>
                      <option>Ghana</option>
                      <option>Uganda</option> */}
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="input-group">
                    <span className="input-group-text text--base style--two">
                      +234
                    </span>
                    <input
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="Phone Number"
                      disabled
                      value={user?.phonenumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="email" className="input-pre-icon">
                      <i className="las la-envelope" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      className="form--control form-control style--two"
                      placeholder="Email"
                      disabled
                      value={user?.email?.toLowerCase()}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="form-group">
                    <div htmlFor="username" className="input-pre-icon">
                      <i className="las la-user" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      className="form--control form-control style--two"
                      placeholder="Username"
                      disabled
                      value={user?.username?.toLowerCase()}
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    {!loading ? (
                      <button
                        className="cmn--btn active w-100 btn--round"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Back to home
                      </button>
                    ) : (
                      <button className="cmn--btn active w-100 btn--round">
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
