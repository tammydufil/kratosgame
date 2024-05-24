import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { AES, enc } from "crypto-js";
import { useNavigate } from "react-router";
import axios from "axios";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

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
    }
  };

  const getBalance = async () => {
    try {
      const newbalance = await axios.post(
        "http://localhost:3002/api/getbalance",
        {
          id: user?.id,
        }
      );
      setBalance(newbalance.data || 0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
  }, [user]);
  useEffect(() => {
    getUser();
  }, []);

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
                  {user && (
                    <a className=" d-none d-lg-block ">
                      Finance(₦{balance?.toLocaleString()})
                    </a>
                  )}
                  {user && (
                    <a href="profile" className=" d-block d-lg-none py-2">
                      Deposit
                    </a>
                  )}
                  {user && (
                    <>
                      <hr className="d-lg-none" />
                      <a href="profile" className=" d-block d-lg-none pt-2">
                        Withdraw
                      </a>
                    </>
                  )}
                  {user && <hr className="d-lg-none" />}
                  <ul className="sub-menu">
                    {user && (
                      <li>
                        <a href="deposit">Deposit</a>
                      </li>
                    )}
                    {user && (
                      <li>
                        <a href="withdraw">Withdraw</a>
                      </li>
                    )}
                  </ul>
                  {user && <hr className="d-lg-none" />}
                </li>
                <li>
                  <a className=" d-none d-lg-block">Account</a>
                  {user && (
                    <a href="profile" className=" d-block d-lg-none pb-2">
                      Profile
                    </a>
                  )}
                  {user && <hr className="d-lg-none" />}
                  {!user && (
                    <a
                      href="sign-in"
                      className=" d-block d-lg-none -mt-[4px]   pb-1"
                    >
                      Sign-In
                    </a>
                  )}
                  {!user && (
                    <>
                      <hr className="d-lg-none" />

                      <a href="sign-up" className=" d-block d-lg-none py-2">
                        Sign-Up
                      </a>
                    </>
                  )}
                  <hr className="d-lg-none" />
                  {user && (
                    <a
                      onClick={() => {
                        sessionStorage.removeItem("user");
                        window.location.reload();
                      }}
                      className=" d-block d-lg-none py-2 cursor-pointer"
                    >
                      Logout
                    </a>
                  )}

                  <ul className="sub-menu">
                    {user && (
                      <li>
                        <a href="profile">Profile</a>
                      </li>
                    )}

                    {!user && (
                      <>
                        {" "}
                        <li>
                          <a href="sign-in">Sign-In</a>
                        </li>
                        <li>
                          <a href="sign-up">Sign-Up</a>
                        </li>
                      </>
                    )}

                    {user && (
                      <li>
                        <a
                          className="hover:cursor-pointer"
                          onClick={() => {
                            sessionStorage.removeItem("user");
                            window.location.reload();
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    )}
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
                {user ? (
                  <a
                    href="profile"
                    className="cmn--btn active btn--md d-none d-sm-block ms-4"
                  >
                    Account
                  </a>
                ) : (
                  <a
                    href="sign-in"
                    className="cmn--btn active btn--md d-none d-sm-block ms-4"
                  >
                    Sign In
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
