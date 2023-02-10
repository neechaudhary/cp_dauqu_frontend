import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SecondHeader from "./SecondHeader";
import axios from "axios";
import { motion } from "framer-motion";
import forget_password from "../assets/images/forget_password.jpg"

import { useEffect } from "react";
import { API } from "./Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Forget_pass() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);


  return (
    <div>
      {/* header nav */}
      <SecondHeader />
      {/* main login */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2, stiffness: 500 }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <section className="h-screen pt-[75px]">
          <div className="px-6 h-full text-gray-800 max-w-[1400px] m-auto">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src={forget_password}
                  className="w-full"
                  alt="Sample image"
                />
              </div>
             
              {/* <button onClick={notify}>Notify!</button>
              <ToastContainer /> */}
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                    <div>
                   <h1 className="text-6xl font-bold mb-5 text-[#05232A]">Reset password</h1>
                    </div>
                <form className="pb-[50px]">
                  
                  {/* Email input */}
                  <div className="mb-6">
                    <input
                      type="email"
                      name="New_password"
                      className="input input-bordered w-full rounded-none "
                      id="exampleFormControlInput2"
                      placeholder="New password"
                      
                    />
                  </div>
                  {/* Password input */}
                  <div className="mb-6">
                    <input
                      type="password"
                      name="confirm_password"
                      className="input input-bordered w-full rounded-none"
                      id="exampleFormControlInput2"
                      placeholder="Confirm password"
                      
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                  </div>
                  <div className="text-center lg:text-left ">
                    <button
                      type="button"
                      className="btn btn-sm   w-full lg:w-40 rounded-none  bg-[#05232A] hover:bg-[#247572]"
                    >
                      Reset password
                    </button>
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default Forget_pass;
