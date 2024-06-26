import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { AES, enc } from "crypto-js";

export const Homepage = () => {
  const [user, setUser] = useState(null);

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
      console.log(decryptedUser);
      setUser(decryptedUser);
    }
  };
  useEffect(() => {
    getUser();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <section
        class="banner-section bg_img overflow-hidden"
        style={{ background: "url(assets/images/banner/bg.png) center" }}
      >
        <div class="container">
          <div class="banner-wrapper lg:flex md:px-2 lg:-mt-[60px] items-center justify-center">
            <div class="banner-content ">
              <h1 class="banner-content__title lg:leading-7 mb-[60px]">
                Play <span class="text--base">Online Casino</span> & Win Money
                Unlimited
              </h1>
              <p class="banner-content__subtitle ">
                THE ULTIMATE ONLINE CASINO PLATFORM. PLAY AGAINST PEOPLE ONLINE
                AND WIN MONEY.
              </p>
              <div class="button-wrapper">
                <a href="sign-in" class="cmn--btn active btn--lg">
                  <i class="las la-play"></i>Our Games
                </a>
                {!user && (
                  <a href="sign-up" class="cmn--btn btn--lg">
                    Sign Up
                  </a>
                )}
              </div>
              <img src="assets/images/banner/card.png" alt="" class="shape1" />
            </div>
            <div class="banner-thumb">
              <img src="assets/images/banner/thumb.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section Ends Here */}
      {/* About Section Starts Here */}
      {/* About Section Ends Here */}
      {/* Game Section Starts Here */}
      {/* Game Section Ends Here */}
      {/* Why Choose Us Section Ends Here */}
      {/* How Section Starts Here */}
      <section
        className="how-section padding-top padding-bottom bg_img"
        style={{ background: "url(assets/images/how/bg2.jpg)" }}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="section-header__title text-2xl">
                  How to Get Started
                </h2>
                <p>
                  Enter the game room: Bet, compete, and win against fellow
                  gamers on our platform. Get started now
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-user-plus" />
                  <div className="badge badge--lg badge--round radius-50">
                    01
                  </div>
                </div>
                <div className="how-item__content">
                  <a href="sign-up">
                    <h4 className="title">Sign Up First &amp; Login</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-money-bill" />{" "}
                  <div className="badge badge--lg badge--round radius-50">
                    02
                  </div>
                </div>
                <div className="how-item__content">
                  <a href="profile">
                    <h4 className="title">Fund your account</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-dice" />
                  <div className="badge badge--lg badge--round radius-50">
                    03
                  </div>
                </div>
                <div className="how-item__content">
                  <a href="game">
                    {" "}
                    <h4 className="title">Game room</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Section Ends Here */}
      {/* Faq Section Starts Here */}
      {/* Faq Section Ends Here */}
      {/* Top Investor & Winner Section Starts Here */}
      {/* Top Investor & Winner Section Ends Here */}
      {/* Testimonial Section Starts Here */}
      {/* Testimonial Section Ends Here */}
      {/* Footer Section Starts Here */}
      <Footer></Footer>
    </div>
  );
};
