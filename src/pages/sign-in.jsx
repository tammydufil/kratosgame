import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Login = () => {
  const [username, setUsername] = useState(" ");

  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();
    console.log("Name:", username);
  };

  return (
    <div>
      {" "}
      <div>
        <Navbar></Navbar>
        {/* inner hero section start */}
        <section
          className="inner-banner bg_img"
          style={{
            background: 'url("assets/images/inner-banner/bg2.jpg") top',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-6 text-center">
                <h2 className="title text-white">Sign In</h2>
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
          className="account-section overflow-hidden bg_img"
          style={{ background: "url(assets/images/account/bg.jpg)" }}
        >
          <div className="container">
            <div className="account__main__wrapper">
              <div className="account__form__wrapper">
                <div className="logo">
                  <a href="/">
                    <img src="assets/images/logo.png" alt="logo" />
                  </a>
                </div>
                <form className="account__form form row g-4">
                  <div className="col-12">
                    <div className="form-group">
                      <div htmlFor="username" className="input-pre-icon">
                        <i className="las la-user" />
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
                      <div htmlFor="pass" className="input-pre-icon">
                        <i className="las la-lock" />
                      </div>
                      <input
                        id="pass"
                        type="password"
                        className="form--control form-control style--two"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <button
                        className="cmn--btn active w-100 btn--round"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between mt-5">
                    <div className="form--check d-flex align-items-center">
                      <input id="check1" type="checkbox" defaultChecked />
                      <label htmlFor="check1">Remember me</label>
                    </div>
                    <a href="#0" className="forgot-pass d-block text--base">
                      Forgot Password ?
                    </a>
                  </div>
                </form>
              </div>
              <div className="account__content__wrapper">
                <div className="content text-center text-white">
                  <h3 className="title text--base mb-4">Welcome to Casinio</h3>
                  <p className>
                    Sign in your Account. Atque, fuga sapiente, doloribus qui
                    enim tempora?
                  </p>
                  <p className="account-switch mt-4">
                    Don't have an Account yet ?{" "}
                    <a className="text--base ms-2" href="sign-up">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Account Section Ends Here */}
        {/* Footer Section Starts Here */}
        <Footer></Footer>
        {/* Footer Section Ends Here */}
        {/* jQuery library */}
        {/* bootstrap 5 js */}
        {/* Pluglin Link */}
        {/* main js */}
      </div>
    </div>
  );
};
