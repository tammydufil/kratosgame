import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="overlay" />
      <div className="header">
        <div className="container">
          <div className="header-bottom">
            <div className="header-bottom-area align-items-center">
              <div className="logo">
                <a href="/">
                  <img
                    src="assets/images/horuslogo.png"
                    alt="logo"
                    style={{
                      width: "150px",
                    }}
                  />
                </a>
              </div>

              <ul className={`menu ${isOpen && "active"}`}>
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="game">
                    Game Room
                    <span className="badge badge--sm badge--base text-dark">
                      NEW
                    </span>
                  </a>
                </li>
                <li className="">
                  <a>Finance</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="deposit">Deposit</a>
                    </li>
                    <li>
                      <a href="withdraw">Withdraw</a>
                    </li>
                    <li>
                      <a href="exchange">Exchange</a>
                    </li>
                  </ul>
                  <hr className="d-lg-none" />
                </li>
                <li>
                  <a>Account</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="profile">Profile</a>
                    </li>
                    <li>
                      <a href="sign-in">Sign-In</a>
                    </li>
                    <li>
                      <a href="sign-up">Sign-Up</a>
                    </li>

                    <li>
                      <a href="logout">Logout</a>
                    </li>
                  </ul>
                  <hr className="d-lg-none" />
                </li>
                {/* <button className="btn-close btn-close-white d-lg-none" /> */}
                <button
                  className="btn-close btn-close-white d-lg-none "
                  onClick={() => {
                    setOpen(false);
                  }}
                ></button>
              </ul>
              <div className="header-trigger-wrapper d-flex d-lg-none align-items-center">
                {/* <div className="header-trigger me-4">
                  <span />
                </div> */}

                <Hamburger toggled={isOpen} toggle={setOpen} />
                <a
                  href="sign-in"
                  className="cmn--btn active btn--md d-none d-sm-block ms-4"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
