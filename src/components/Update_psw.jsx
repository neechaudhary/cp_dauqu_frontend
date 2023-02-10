import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import loginplease from "../assets/images/loginPlease.jpg";
import SecondHeader from "./SecondHeader";
import { BiPowerOff } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { BsHandbagFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { API } from "./Constant";

// import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Update_psw() {
  const { id } = useParams();

  // scrool to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  // handleLogout
  const HandleUpdate = () => {
    window.alert("This feature will be available soon.");
  };
  // getting data of user profile from profile api
  const [user, setUser] = useState("");
  // console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios.get(`${API}/profile`, {
        withCredentials: true,
      });
      setUser(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);

  //   logout function

  return (
    <div>
      {/* header */}
      <SecondHeader />
      {/* main content  */}
      {user.length !== 0 ? (
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
          <section className="pt-16    ">
            <div className=" bg-[#fbfbfb]     w-full p-4 sm:p-0  m-auto sm:flex   ">
              <div className="border sm:w-[200px] ">
                <div className="p-4  text-left">
                  <div className="w-[150px] m-auto ">
                    <img
                      src={user.image}
                      className="rounded-full"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="text-[22px] flex   font-semibold mt-2 text-center">
                      {user.name}
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:block flex overflow-x-scroll ">
                  <div className="">
                    <Link to={`/cart/${user._id}`}>
                      <button className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 ">
                        <div className="w-[30px]">
                          <BsHandbagFill />
                        </div>
                        <div className="">Cart</div>
                      </button>
                    </Link>
                  </div>
                  <div className="">
                    <button className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 ">
                      <div className="w-[30px]">
                        <AiFillHome />
                      </div>
                      <div className="">Account</div>
                    </button>
                  </div>

                  <div className="">
                    <button
                      className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 "
                      onClick={() => HandleUpdate()}
                    >
                      <div className="w-[30px]">
                        <FaKey />
                      </div>
                      <div className="">Password</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-full sm:p-12 p-8">
                <div className="flex items-center justify-between ">
                  <div className="text-[25px] text-[#342B3D] font-bold">
                    Account Settings
                  </div>
                </div>

                <div className="md:flex w-full  mt-2">
                  <div className="mt-4  w-full md:w-1/2 m-2">
                    <div className="text-[17px] text-[#342B3D] font-semibold">
                      UniqueKey{" "}
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2"></div>
                    </div>
                  </div>
                </div>
                <div className="md:flex w-full  mt-2">
                  <div className="mt-4  w-full md:w-1/2 m-2">
                    <div className="text-[17px] text-[#342B3D] font-semibold">
                      Email
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      ) : (
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
          <section className="pt-16 bg-blueGray-50">
            <div className="w-full lg:w-4/12 px-4 mx-auto ">
              <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <img src={loginplease} alt="" srcset="" />
                    <div className="pb-4">
                      <h1 className="text-3xl text-[#165461] font-bold text-center">
                        Please{" "}
                        <Link to="/login" className="text-[35px] underline">
                          Login
                        </Link>{" "}
                        First
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}
