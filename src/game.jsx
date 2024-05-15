import React from 'react'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

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
       <Footer></Footer>
        {/* Footer Section Ends Here */}
        {/* jQuery library */}
        {/* bootstrap 5 js */}
        {/* Pluglin Link */}
        {/* main js */}
      </div>
    </div>
  )
}
