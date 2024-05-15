import React from 'react'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'

export const Changepassword = () => {
  return (
    <div>
         <div>
     <Navbar></Navbar>
        {/* inner hero section start */}
        <section className="inner-banner bg_img" style={{background: 'url("assets/images/inner-banner/bg2.jpg") top'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-6 text-center">
                <h2 className="title text-white">Change Passord</h2>
                <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li>Change Password</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* inner hero section end */}
        {/* Dashboard Section Starts Here */}
        <div className="dashboard-section padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="dashboard-sidebar">
                  <div className="close-dashboard d-lg-none">
                    <i className="las la-times" />
                  </div>
                  <div className="dashboard-user">
                    <div className="user-thumb">
                      <img src="assets/images/top/item1.png" alt="dashboard" />
                    </div>
                    <div className="user-content">
                      <span>Welcome</span>
                      <h5 className="name">Munna Ahmed</h5>
                      <ul className="user-option">
                        <li>
                          <a href="#0">
                            <i className="las la-bell" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="las la-pen" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="las la-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="user-dashboard-tab">
                  
                    <li>
                      <a href="deposit">Deposit History</a>
                    </li>
                    <li>
                      <a href="withdraw">Withdraw History</a>
                    </li>
                    <li>
                      <a href="transaction">Transection History</a>
                    </li>
                    <li>
                      <a href="profile">Account Settings</a>
                    </li>
                    <li>
                      <a href="changepassword">Security Settings</a>
                    </li>
                    <li>
                      <a href="#0">Sign Out</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="user-toggler-wrapper d-flex align-items-center d-lg-none">
                  <h4 className="title m-0">User Dashboard</h4>
                  <div className="user-toggler">
                    <i className="las la-sliders-h" />
                  </div>
                </div>
                <div className="custom--card section-bg">
                  <div className="card--body section-bg p-sm-5 p-3">
                    <div className="reset-header mb-5 text-center">
                      <div className="icon"><i className="las la-lock" /></div>
                      <h3 className="mt-3">Reset Password</h3>
                      <p>Enter your current password and new password</p>
                    </div>
                    <form autoComplete="off">
                      <div className="form-group mb-3">
                        <label className="form-label" htmlFor="password">Current Password</label>
                        <input id="password" type="password" className="form-control form--control" name="current_password" required autoComplete="off" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control form--control" name="password" required autoComplete="off" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label" htmlFor="confirm_password">Confirm Password</label>
                        <input id="password_confirmation" type="password" className="form-control form--control" name="password_confirmation" required autoComplete="off" />
                      </div>
                      <div className="form-group mt-4">
                        <button type="submit" className="cmn--btn active w-100">Change Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard Section Ends Here */}
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
