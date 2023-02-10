import React from "react";
import { useState } from "react";
import { FlatTree, motion } from "framer-motion";
import { useEffect } from "react";

import { FaPlayCircle, FaShoppingCart } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { BiCopy } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";
import { GiCheckMark } from "react-icons/gi";
import { API } from "./Constant";
import SolarSystem from "./SolarSystem";
function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  // --------------
  const [user, setUser] = useState("");
  // console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios.get(`${API}/profile`, {
        withCredentials: true,
      });
      setUser(response.data);
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);

  const [navbar, setNavbar] = useState(false);
  const [clipboard, setClipboard] = useState(false);
  const [copied, setcopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `wget https://dauqu.com/install.sh && ./install.sh`
    );
    setcopied(true);
  };
  return (
    <>
      <div className="mainheader bg-[#165461]    ">
        <nav className="w-full bg-[#01232a]  relative z  ">
          <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-4 md:block">
                <Link to="/">
                  <h2 className="text-2xl text-[white] font-bold">Dauqu</h2>
                </Link>
                <div className="flex items-center">
                <div className="min-w-[120px] md:hidden">
              {/* <button className="bg-[#337681] rounded p-2 text-[#DCE8E9] text-[14px] text-center font-semibold">
             
              </button> */}
              <button
                onClick={() => setClipboard(!clipboard)}
                className="btn btn-outline btn-accent rounded-none btn-sm"
              >
                Install Now
              </button>
            </div>
                <div className="md:hidden">
                  <button
                    className="p-2 text-[white] rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                </div>

              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <li className="btn btn-ghost  text-[white] hover:cursor-pointer p-2  ">
                    <Link to="/">Home</Link>
                  </li>

                  <li
                    className="btn btn-ghost text-[white] hover:cursor-pointer p-2   "
                    onClick={() => {
                      //Scroll to bottom
                      window.scroll({
                        top: document.body.offsetHeight,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <a href="javascript:void(0)">Contact US</a>
                  </li>
                  {/* <li className="text-[white] hover:cursor-pointer ">
                    <a href="javascript:void(0)">Contact US</a>
                  </li> */}
                  {user.length == 0 ? (
                    <Link to="/login">
                      <li className="btn btn-ghost text-[white] hover:cursor-pointer p-2   ">
                        Login
                      </li>
                    </Link>
                  ) : (
                    <>
                      <Link to="/profile">
                        <li className="btn btn-ghost text-[white] hover:cursor-pointer p-2    ">
                          Profile
                        </li>
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="min-w-[120px] hidden md:block">
              {/* <button className="bg-[#337681] rounded p-2 text-[#DCE8E9] text-[14px] text-center font-semibold">
             
              </button> */}
              <button
                onClick={() => setClipboard(!clipboard)}
                className="btn btn-outline btn-accent rounded-none btn-sm"
              >
                Install Now
              </button>
            </div>
          </div>
        </nav>
        {/* top part-----------ends here------------------ */}

        {/* middle part-----------start form here------------------ */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.7, stiffness: 500 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="text-center sm:mt-0 sm:pt-0  md:mt-6 md:p-6 lg:mt-0 items-center mb-[40px] relative z-10">
            <div className="text-white p-2  font-bold lg:text-[40px] text-[25px] mt-10 sm:mt-0 relative z-10">
             <span className="sm:text-[60px] text-[34px]" style={{background:"linear-gradient(to right, #b2ff42 0%, #0d8773 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Free Self Hosted</span> <br />
              Deployment Panel
            </div>

            <div className="  text-[#B1CBCF] lg:mt-0 text-[17px] md:w-1/2 m-auto p-5 text-center sm:mt-0  relative z-10">
              Using Dauqu you can deploy your app in minutes. Dauqu is a cloud
              based platform that allows you to deploy your app in minutes.
              Dauqu support all major languages and frameworks.
            </div>
            {/* <div className="flex mt-12 justify-center z-10  relative">
              <div className="">
                <button className="bg-[#FFFFFF] p-2 text-[#3E6F7A] font-semibold">
                  Contact Us on Whatsapp +91 7275765160
                </button>
              </div>
            </div> */}
            {clipboard ? (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.7, stiffness: 500 }}
                className="mt-4 flex items-center justify-center max-w-[510px] px-4 m-auto relative z-10"
              >
                <div className="lg:mt-4 xl:mt-6 elementLink text-center bg-slate-200 p-[4px] w-auto overflow-x-hidden">
                  <input className="w-[342px] outline-none" value="wget https://dauqu.com/install.sh && ./install.sh" readOnly/>
                </div>
                <div className="w-[131px] xl:mt-6 lg:mt-4 text-center items-center shrink-0 grow-0">
                  {copied ? (
                    <button
                      className="btn btn-outline btn-accent flex items-center rounded-none btn-sm"
                      onClick={copyToClipboard}
                    >
                      Link Copied &nbsp; <GiCheckMark />
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline btn-accent flex items-center rounded-none btn-sm"
                      onClick={copyToClipboard}
                    >
                      Copy &nbsp; <BiCopy />
                    </button>
                  )}
                </div>
              </motion.div>
            ) : null}
            <div className="flex justify-center items-center content-center	relative    sm:m-6 md:8 text-center h-[150px] z-0">
              {/* <SolarSystem /> */}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
