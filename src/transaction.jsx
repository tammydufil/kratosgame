import React from 'react'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'

export const Transaction = () => {
  return (
    <div>
        <div>
     <Navbar></Navbar>
        {/* inner hero section start */}
        <section className="inner-banner bg_img" style={{background: 'url("assets/images/inner-banner/bg2.jpg") top'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-6 text-center">
                <h2 className="title text-white">Transaction Logs</h2>
                <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li>Transaction</li>
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
                      <a href="deposit">Deposit </a>
                    </li>
                    <li>
                      <a href="withdraw">Withdraw </a>
                    </li>
                    <li>
                      <a href="transaction">Transaction History</a>
                    </li>
                    <li>
                      <a href="profile">Account Settings</a>
                    </li>
                    <li>
                      <a href="changepassword">Security Settings</a>
                    </li>
                    <li>
                      <a href="logout">Sign Out</a>
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
                <div className="table--responsive--md">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Transection ID</th>
                        <th>Transection Type</th>
                        <th>Date</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#481XV93NCKD0</td>
                        <td className="trx-type" data-label="Transection Type">Withdraw</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$150.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#V93N481XCKD0</td>
                        <td className="trx-type" data-label="Transection Type">Deposit</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$500.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#1XCKD0V93N48</td>
                        <td className="trx-type" data-label="Transection Type">Deposit</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$350.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#V981XCKD03N4</td>
                        <td className="trx-type" data-label="Transection Type">Withdraw</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$250.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#481XV93NCKD0</td>
                        <td className="trx-type" data-label="Transection Type">Deposit</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$150.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#V93N481XCKD0</td>
                        <td className="trx-type" data-label="Transection Type">Withdraw</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$500.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#1XCKD0V93N48</td>
                        <td className="trx-type" data-label="Transection Type">Deposit</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$350.50</td>
                      </tr>
                      <tr>
                        <td className="trx-id" data-label="Transection ID">#V981XCKD03N4</td>
                        <td className="trx-type" data-label="Transection Type">Withdraw</td>
                        <td className="date" data-label="Date">12 Mar, 21 at 12:30 AM</td>
                        <td className="amount" data-label="Amount">$250.50</td>
                      </tr>
                    </tbody>
                  </table>
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
