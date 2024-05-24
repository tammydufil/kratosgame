import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { AES, enc } from "crypto-js";
import { useNavigate } from "react-router";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showing, setShowing] = useState(false);

  const notify = () => toast(toastMessage);

  const encryptObject = (obj, secretKey) => {
    const jsonString = JSON.stringify(obj);
    return AES.encrypt(jsonString, secretKey).toString();
  };

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
      // console.log(decryptedUser.email);
      navigate("/");
    } else {
      setShowing(true);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (!username) {
        throw new Error("Username is required");
      }
      if (!password) {
        throw new Error("Password is required");
      }

      const newData = await axios.post("http://localhost:3002/api/login", {
        username,
        password,
      });

      const encryptedString = encryptObject(newData.data.userData, secretKey);

      sessionStorage.setItem("user", encryptedString);
      navigate("/");

      setToastMessage("Logged in successfully");

      setLoading(false);
    } catch (error) {
      setLoading(false);

      if (error?.response?.data) {
        setToastMessage(error?.response?.data);
      } else {
        setToastMessage(error.message);
      }
    }
  };

  useEffect(() => {
    if (toastMessage !== "") {
      console.log(toastMessage);
      notify();
      setToastMessage("");
    }
  }, [toastMessage]);

  return (
    showing && (
      <div>
        {" "}
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
                  <h2 className="title text-white text-3xl uppercase">
                    Sign In
                  </h2>

                  <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Sign In</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* inner hero section end */}
          {/* Account Section Starts Here */}
          <section
            className="account-section overflow-hidden bg_img bg-[#e8e8e890]"
            style={{ background: "url(assets/images/account/bg.jpg)" }}
          >
            <div className="container">
              <div className="account__main__wrapper">
                <div className="account__form__wrapper">
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
                    <div className="col-12">
                      <div className="form-group">
                        <div
                          htmlFor="username"
                          className="input-pre-icon bg-[#000000c4] border-none"
                        >
                          <i className="las la-user text-2xl " />
                        </div>
                        <input
                          id="username"
                          type="text"
                          className="form--control form-control style--two"
                          placeholder="Username"
                          required
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <div
                          htmlFor="pass"
                          className="input-pre-icon bg-[#000000c4] border-none"
                        >
                          <i className="las la-lock text-2xl" />
                        </div>
                        <input
                          id="pass"
                          type="password"
                          className="form--control form-control style--two"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        {loading ? (
                          <button className="cmn--btn active w-100 btn--round">
                            Loading ...
                          </button>
                        ) : (
                          <button
                            className="cmn--btn active w-100 btn--round"
                            onClick={() => {
                              handleSubmit();
                            }}
                          >
                            Sign In
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between mt-3 ml-2">
                      <a href="#0" className="forgot-pass d-block text--base">
                        Forgot Password ?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <ToastContainer />

          <Footer></Footer>
        </div>
      </div>
    )
  );
};
