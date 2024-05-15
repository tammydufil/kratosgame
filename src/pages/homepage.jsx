import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* Banner Section Starts Here */}{" "}
      <section
        class="banner-section bg_img overflow-hidden"
        style={{ background: "url(assets/images/banner/bg.png) center" }}
      >
        <div class="container">
          <div class="banner-wrapper lg:flex md:px-2 lg:-mt-[60px] items-center justify-center">
            <div class="banner-content ">
              <h1 class="banner-content__title lg:leading-7 mb-[60px]">
                Playyyy <span class="text--base">Online Casino</span> & Win
                Moneyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy Unlimited
              </h1>
              <p class="banner-content__subtitle ">
                PLAY CASINO AND EARN CRYPTO IN ONLINE. THE ULTIMATE ONLINE
                CASINO PLATFORM.
              </p>
              <div class="button-wrapper">
                <a href="#" class="cmn--btn active btn--lg">
                  <i class="las la-play"></i> Play Now
                </a>
                <a href="sign-up.html" class="cmn--btn btn--lg">
                  Sign Up
                </a>
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
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="section-header__title text-2xl">
                  How to Play Game
                </h2>
                <p>
                  A casino is a facility for certain types of gambling. Casinos
                  are often built combined with hotels, resorts.
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
                  <h4 className="title">Sign Up First &amp; Login</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="how-item">
                <div className="how-item__thumb">
                  <i className="las la-id-card" />
                  <div className="badge badge--lg badge--round radius-50">
                    02
                  </div>
                </div>
                <div className="how-item__content">
                  <h4 className="title">Complete you Profile</h4>
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
                  <h4 className="title">Choose a Game &amp; Play</h4>
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
