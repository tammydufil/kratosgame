import React from 'react'
import { Navbar } from './components/navbar'

export const Game = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
        {/* inner hero section start */}
        <section className="inner-banner bg_img" style={{background: 'url("assets/images/inner-banner/bg2.jpg") top'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-6 text-center">
                <h2 className="title text-white">Games</h2>
                <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                  <li><a href="index.html">Home</a></li>
                  <li>Games</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* inner hero section end */}
        {/* Game Section Starts Here */}
        <section className="game-section padding-top padding-bottom bg_img" style={{background: 'url(assets/images/game/bg3.jpg)'}}>
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                <div className="game-item">
                  <div className="game-inner">
                    <div className="game-item__thumb">
                      <img src="assets/images/game/item2.png" alt="game" />
                    </div>
                    <div className="game-item__content">
                      <h4 className="title">Roulette</h4>
                      <p className="invest-info">Invest Limit</p>
                      <p className="invest-amount">$10.49 - $1,000</p>
                      <a href="#0" className="cmn--btn active btn--md radius-0">Play Now</a>
                    </div>
                  </div>
                  <div className="ball" />
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                <div className="game-item">
                  <div className="game-inner">
                    <div className="game-item__thumb">
                      <img src="assets/images/game/item1.png" alt="game" />
                    </div>
                    <div className="game-item__content">
                      <h4 className="title">Zero To Ninty</h4>
                      <p className="invest-info">Invest Limit</p>
                      <p className="invest-amount">$10.49 - $1,000</p>
                      <a href="#0" className="cmn--btn active btn--md radius-0">Play Now</a>
                    </div>
                  </div>
                  <div className="ball" />
                </div>
              </div>
              
              
              
            <div>
              <div>
              </div>
          
              </div>
              
    
            <div>
                <div>
                  <div className="ball" />
                </div>
              </div>
              <div >
                <div >
            <div>

                  </div>
                  <div className="ball" />
                </div>
              </div>
              <div >
                <div>
                
                  <div>
            
                  </div>
                  <div className="ball" />
                </div>
              </div>
            <div>
              </div>
            </div>
        
          </div>
        </section>
        {/* Game Section Ends Here */}
        {/* Footer Section Starts Here */}
        <footer className="footer-section bg_img" style={{background: 'url(assets/images/footer/bg.jpg) center'}}>
          <div className="footer-top">
            <div className="container">
              <div className="footer-wrapper d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
                <div className="logo mb-3 mb-md-0"><a href="index.html"><img src="assets/images/logo.png" alt="logo" /></a></div>
                <ul className="footer-links d-flex flex-wrap justify-content-center">
                  <li><a href="games.html">Games</a></li>
                  <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                  <li><a href="policy.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-wrapper d-flex flex-wrap justify-content-center align-items-center text-center">
                <p className="copyright text-white">Copyrights © 2021 All Rights Reserved by <a href="#0" className=" text--base ms-2">Viserlab</a></p>
              </div>
            </div>
          </div>
          <div className="shapes">
            <img src="assets/images/footer/shape.png" alt="footer" className="shape1" />
          </div>
        </footer>
        {/* Footer Section Ends Here */}
        {/* jQuery library */}
        {/* bootstrap 5 js */}
        {/* Pluglin Link */}
        {/* main js */}
      </div>
    </div>
  )
}
