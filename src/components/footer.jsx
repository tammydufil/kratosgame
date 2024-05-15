import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer
        className="footer-section bg_img"
        // style={{ background: "url(assets/images/footer/bg.jpg) center" }}
      >
        <div className="footer-top px-2">
          <div className="container">
            <div className="footer-wrapper d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
              <div className="logo mb-3 mb-md-0">
                <a href="/" className="flex items-center">
                  <img
                    src="assets/images/horuslogo.png"
                    alt="logo"
                    style={{
                      width: "150px",
                    }}
                  />
                  <img
                    src="assets/images/nigeria.png"
                    alt=""
                    className=" mt-1 w-[30px] h-[30px]"
                  />
                  <h5 className="ml-2 mt-2">Nigeria</h5>
                </a>

                <div className="flex mt-4 md:mt-3">
                  <img
                    src="assets/images/18.png"
                    alt=""
                    className="w-[30px] h-[30px] "
                  />
                  <h4 className="ml-3">
                    Age 18 and above only to register or play at Kratosgame.
                    <br />
                    Play Responsibly.
                  </h4>
                </div>
              </div>
              <div className="flex md:flex-col flex-col-reverse">
                <ul className="footer-links d-flex flex-wrap justify-content-center mt-5 md:mt-0">
                  <li>
                    <a href="game">Game</a>
                  </li>
                  <li>
                    <a href="terms">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="policy">Privacy Policy</a>
                  </li>
                </ul>
                <div className=" md:ml-[10px] mt-4 md:mt-0 ">
                  <h4>Connect with us</h4>
                  <h4 className="mt-2">Telephone: 08077335351</h4>
                  <h4 className="mt-2">Email: support@kratosgame.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-col sm:flex  justify-center mx-4">
              <div className="footer-wrapper d-flex flex-wrap justify-content-center align-items-center text-center">
                <p className="copyright text-white">
                  Copyrights © 2024 All Rights Reserved by
                  <a href="/" className=" text--base ms-2">
                    Kratosgame
                  </a>
                </p>
              </div>

              <div className="flex mt-4 sm:mt-0  md:pl-5 items-center">
                <img src="assets/images/card.png" className="w-[40px]" alt="" />
                <img
                  src="assets/images/card1.png"
                  className="w-[30px] sm:w-[40px] h-full ml-9"
                  alt=""
                />
                <img
                  src="assets/images/card2.png"
                  className="w-[30px] sm:w-[40px] h-full ml-9"
                  alt=""
                />
                <img
                  src="assets/images/card3.png"
                  className="w-[30px] sm:w-[40px] h-full ml-9"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
