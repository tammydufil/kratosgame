import React from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const Withdraw = () => {
  return (
    <div>
          <div>
      <div>
        <Navbar></Navbar>
        {/* inner hero section start */}
        <div className="">
          <section
            className="inner-banner bg_img"
            style={{
              background:
                'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url("assets/images/inner-banner/bg2.jpg") top',
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-xl-6 text-center">
                  <h2 className="title text-white text-3xl">Withdraw</h2>
                  <ul className="breadcrumbs d-flex flex-wrap align-items-center justify-content-center">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Withdraw</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* inner hero section end */}
          {/* Profile Section Starts Here */}

          <div className="bg-[#00000082] flex justify-center !py-[50px] ">
            <div className="bg-slate-300 text-black rounded-xl py-4 px-3 shadow-xl min-w-[350px]">
              <div className="flex justify-center">
                <img
                  src="/assets/images/boy.png"
                  className="w-[140px] mb-4 shadow-xl py-2 rounded-lg px-3"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base">
                    Userame
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form--control mt-[5px] rounded-xl form-control text-black bg-[black] border-[2px] disabled:bg-black disabled:text-white  border-purple-200 focus:bg-black focus:shadow-2xl"
                    placeholder="John123"
                    required
                    // disabled
                    // value={username}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base">
                    Full Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form--control mt-[5px] rounded-xl form-control text-black bg-[black] border-[2px] disabled:bg-black disabled:text-white  border-purple-200 focus:bg-black focus:shadow-2xl"
                    placeholder="Ebere Ajayi"
                    required
                    // disabled
                    // value={username}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base">
                    Balance
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form--control mt-[5px] rounded-xl form-control text-black bg-[black] border-[2px] disabled:bg-black disabled:text-white  border-purple-200 focus:bg-black focus:shadow-2xl"
                    placeholder="₦200.00"
                    required
                    // disabled
                    // value={username}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base">
                    Withdrawable Balance
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form--control mt-[5px] rounded-xl form-control text-black bg-[black] border-[2px] disabled:bg-black disabled:text-white  border-purple-200 focus:bg-black focus:shadow-2xl"
                    placeholder="₦200.00"
                    required
                    // disabled
                    // value={username}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-base">
                    Enter Amount
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form--control mt-[5px] rounded-xl form-control text-black bg-[black] border-[2px] disabled:bg-black disabled:text-white  border-purple-200 focus:bg-black focus:shadow-2xl"
                    placeholder="₦150.00"
                    required
                    disabled
                    // value={username}
                  />
                </div>
                {/* <div className="flex flex-col">
                  <label htmlFor="" className="text-base">
                    Email
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form--control mt-[5px] rounded-xl form-control text-black bg-[black] border-[2px] disabled:bg-black disabled:text-white  border-purple-200 focus:bg-black focus:shadow-2xl"
                    placeholder="John@gmail.com"
                    required
                    disabled
                    // value={username}
                  />
                </div> */}
              </div>
              <div className="form-group mt-4">
                <button
                  className="cmn--btn active w-100 btn--round"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                Submit
                </button>
              </div>
            </div>
          </div>
        </div>
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
  </div>
  );
};
