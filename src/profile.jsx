import React from 'react'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'

export const Profile = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
        {/* inner hero section start */}
        <section className="inner-banner bg_img" style={{background: 'url("assets/images/inner-banner/bg2.jpg") top'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-6 text-center">
                <h2 className="title text-white">Profile</h2>
                <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* inner hero section end */}
        {/* Profile Section Starts Here */}
        <section className="profile-section padding-top padding-bottom">
          <div className="container">
            <div className="profile-edit-wrapper">
              <div className="row gy-5">
                <div className="col-xl-4">
                  <div className="profile__thumb__edit text-center custom--card">
                    <div className="card--body">
                      <div className="thumb">
                        <img src="assets/images/user1.png" alt="testimonial" />
                      </div>
                      <div className="profile__info">
                        <h4 className="name">Demo User</h4>
                        <p className="username">@demouser123</p>
                        <input type="file" className="form-control d-none " id="update-photo" />
                        <label className="cmn--btn active btn--md mt-3" htmlFor="update-photo">Update Profile Picture</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="custom--card card--lg">
                    <div className="card--body">
                      <div className="row gy-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input id="fname" type="text" className="form-control form--control style-two " placeholder="testuser" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input id="lname" type="text" className="form-control form--control style-two " placeholder="testuser" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="uname" className="form-label">Username</label>
                            <input id="text" type="uname" className="form-control form--control style-two " placeholder="testuser" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input id="email" type="email" className="form-control form--control style-two " placeholder="testuser@gmail.com" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="country" className="form-label">Country</label>
                            <select name id className="form-select form--select form--control style-two">
                              <option value>Bangladesh</option>
                              <option value>India</option>
                              <option value>English</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="number" className="form-label">Phone Number</label>
                            <div className="input-group">
                              <span className="input-group-text text--base">+192</span>
                              <input id="number" type="tel" className="form-control form--control style-two " placeholder="ex. +09 3195 1452" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="addr" className="form-label">Address</label>
                            <input id="addr" type="text" className="form-control form--control style-two " placeholder="Uttara" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="zip" className="form-label">Zip Code</label>
                            <input id="zip" type="text" className="form-control form--control style-two " placeholder={1230} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label" htmlFor="about">About You</label>
                            <textarea className="form-control form--control style-two pt-3" placeholder="I'm a Front-end Web Developer. ...." defaultValue={""} />
                          </div>
                        </div>
                        <div className="col">
                          <button className="cmn--btn active mt-3">Update Profile</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Profile Section Ends Here */}
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
