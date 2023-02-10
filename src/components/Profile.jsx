import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import loginplease from "../assets/images/loginPlease.jpg";
import SecondHeader from "./SecondHeader";
import { AiFillHome, AiFillSetting, AiTwotoneSetting } from "react-icons/ai";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { API } from "./Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscibedPlan from "./SubscibedPlan";
import CircularProgress from "@mui/material/CircularProgress";
// import { BsFillPatchCheckFill } from "react-icons/bs";
function Profile() {
  const [showModal, setShowModal] = useState(false); // modal for password update
  const [userSettingModal, setUserSettingModal] = useState(false); // modal for user Account setting
  const [toastify_psw, setToastify_psw] = useState(false); // toastify for password update success
  const [toastify_psw_err, setToastify_psw_err] = useState(false); // toastify for password update error
  const [toastify_user, setToastify_user] = useState(false); // toastify for user account setting success
  const [toastify_user_err, setToastify_user_err] = useState(false); // toastify for user account setting error
  const [user, setUser] = useState("");
  const [old_password, setOld_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  // for success toastify password update
  const notify_psw = () => {
    toast.success("Password Updated Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // for error toastify password update
  const notify_psw_err = () => {
    toast.error("Password Update Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // for success toastify user account setting
  const notify_user = () => {
    toast.success("Settings Updated", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // for error toastify user account setting error
  const notify_user_err = () => {
    toast.error("Settings Update Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
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

  // getting data of user profile from profile api
  // console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios.get(`${API}/profile`, {
        withCredentials: true,
      });
      setUser(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      // console.log(error);
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);
  //   logout function
  async function UserLogut() {
    try {
      const resp = await axios.get(`${API}/logout`, {
        withCredentials: true,
      });
      // console.log(resp.data);
      // console.log("logout done");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }
  // password update function

  const _id = user._id;
  // console.log(_id);

  const handlePasswordUpdate = async () => {
    try {
      await axios
        .patch(`${API}/getuser/update/password/${_id}`, {
          old_password: old_password,
          new_password: new_password,
          confirm_password: confirm_password,
        })
        .then((res) => {
          // console.log(res.data);
          setToastify_psw(true);
          notify_psw();
          // window.location.href = "/profile";
        })
        .catch((err) => {
          // console.log(err);
          setToastify_psw_err(true);
          notify_psw_err();
        });
    } catch (error) {
      // console.log(error);
    }
  };

  // code to get user by id
  const getUserById = async () => {
    if (user._id === undefined) return;
    await axios
      .get(`${API}/getuser/${user._id}`)
      .then((res) => {
        let info = res.data;

        setName(info.name);
        setUsername(info.username);
        setEmail(info.email);
        setPhone(info.phone);
        setAddress(info.address);
        setCountry(info.country);
      })
      .catch((err) => {
        setTimeout(() => {
          console.log(err);
        }, [5000]);
      });
  };
  useEffect(() => {
    getUserById();
  }, [user._id]);

  // code to update user
  const handleUserUpdate = async (e) => {
    e.preventDefault();

    axios
      .patch(`${API}/getuser/update/user/${user._id}`, {
        name,
        username,
        email,
        phone,
        address,
        country,
      })
      .then((res) => {
        // console.log(res.data);
        // window.alert("user updated successfully");
        setToastify_user(true);
        notify_user();
        setTimeout(() => {
          window.location.href = "/profile";
        }, [2000]);
      })
      .catch((err) => {
        console.log(err);
        setToastify_user_err(true);
        notify_user_err();
        // window.alert("user not updated");
      });
  };

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
            <div className=" bg-[#fbfbfb]  md:h-[100vh]    w-full p-4 sm:p-0  m-auto sm:flex   ">
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
                      onClick={() => setUserSettingModal(!userSettingModal)}
                    >
                      <div className="w-[30px]">
                        <AiFillSetting size={18} />
                      </div>
                      <div className=""> Settings</div>
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#165461] justify-center hover:text-[white]  p-4 "
                      onClick={() => setShowModal(!showModal)}
                    >
                      <div className="w-[30px]">
                        <FaKey />
                      </div>
                      <div className="">Password</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border w-full sm:p-12 md:p-8 p-2">
                <div className="flex items-center justify-between ">
                  <div className="text-[25px] text-[#342B3D] font-bold">
                    Account
                  </div>
                  <div className="">
                    <button
                      className="p-[6px] w-full bg-[#165461] text-[white] rounded font-semibold"
                      onClick={() => UserLogut()}
                    >
                      Logout
                    </button>
                  </div>
                </div>

                <div className="md:flex w-full  mt-2">
                  <div className="mt-4  w-full md:w-1/2 m-2">
                    <div className="text-[17px] text-[#342B3D] font-semibold">
                      UniqueKey{" "}
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2">
                        {user.uniqueKey}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full  md:w-1/2  m-2">
                    <div className="text-[17px]  text-[#342B3D] font-semibold">
                      Username
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2">
                        {user.username}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex w-full  mt-2">
                  <div className="mt-4  w-full md:w-1/2 m-2">
                    <div className="text-[17px] text-[#342B3D] font-semibold">
                      Email
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full  md:w-1/2  m-2">
                    <div className="text-[17px]  text-[#342B3D] font-semibold">
                      Phone
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2">
                        {user.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex w-full  mt-2">
                  <div className="mt-4  w-full md:w-1/2 m-2">
                    <div className="text-[17px] text-[#342B3D] font-semibold">
                      Country
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2">
                        {user.country}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full  md:w-1/2  m-2">
                    <div className="text-[17px]  text-[#342B3D] font-semibold">
                      Address
                    </div>
                    <div className="mt-2 ">
                      <div className="rounded  w-full border p-2">
                        {user.address}
                      </div>
                    </div>
                  </div>
                </div>
                {/*---------------- order details of user with conditional rendering  --------------------*/}
                <SubscibedPlan />
              </div>
            </div>

            {/* -----------------MODAL POPUP FOR PASSWORD UPDATE------------------ */}
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto md:my-6 my-24 md:mt-0 mt-[350px] md:p-0 p-4 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Update Password
                        </h3>

                        <button
                          className="btn btn-circle btn-sm btn-outline  hover:bg-[#05232A] p-1 ml-auto     text-black  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6  ">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          You can update your password here by entering your old
                          password and new password.
                        </p>
                        <div className="flex flex-col">
                          <div className="flex flex-col">
                            <label className="leading-loose">
                              Old Password
                            </label>
                            <input
                              type="password"
                              placeholder="Old Password"
                              name={old_password}
                              onChange={(e) => setOld_password(e.target.value)}
                              className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                            />
                          </div>
                          <div className="flex flex-col mt-4">
                            <label className="leading-loose">
                              New Password
                            </label>
                            <input
                              type="password"
                              placeholder="New Password"
                              name={new_password}
                              onChange={(e) => setNew_password(e.target.value)}
                              className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                            />
                          </div>
                          <div className="flex flex-col mt-4">
                            <label className="leading-loose">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              placeholder="Confirm Password"
                              name={confirm_password}
                              onChange={(e) =>
                                setConfirm_password(e.target.value)
                              }
                              className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                            />
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-600  border hover:border hover:border-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => handlePasswordUpdate()}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            <div>
              {
                // -----------------MODAL POPUP FOR PROFILE UPDATE------------------
                userSettingModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto  md:my-6 my-24 md:mt-0 mt-[350px] mx-auto max-w-3xl md:p-0 p-4">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Account Settings
                            </h3>
                            <button
                              className="btn btn-circle btn-sm btn-outline  hover:bg-[#05232A] p-1 ml-auto     text-black  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setUserSettingModal(false)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6  ">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              You can update your profile here by entering your
                              new details.
                            </p>
                            {/* grid coloumns for input */}
                            <form
                              className="w-full max-w-lg"
                              onSubmit={(e) => handleUserUpdate(e)}
                            >
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                  >
                                    Name
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                                    id="grid-first-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                  >
                                    Username
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                      setUsername(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                  >
                                    Email
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                                    id="grid-first-name"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                  >
                                    Phone
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                                    id="grid-last-name"
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                  >
                                    Country
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                                    id="grid-first-name"
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                  />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                  >
                                    Address
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-[#ebebeb54] text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none   focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-600  border hover:border hover:border-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-1500"
                              type="button"
                              onClick={() => setUserSettingModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={(e) => handleUserUpdate(e)}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null
              }
            </div>

            {/* toastify for password update success */}
            {toastify_psw ? (
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            ) : null}

            {/* toastify for password update error */}
            {toastify_psw_err ? (
              <>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </>
            ) : null}
            {/* toastify foruser account update success */}
            {toastify_user ? (
              <>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </>
            ) : null}
            {/* toastify for user account update error */}
            {toastify_user_err ? (
              <>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </>
            ) : null}
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
          <div className="flex justify-center text-center p-24">
            <CircularProgress size={50} />
          </div>
          {/* <section className="pt-16 bg-blueGray-50">
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
          </section> */}
        </motion.div>
      )}
    </div>
  );
}

export default Profile;
