import React, { useState, useEffect } from 'react'
import axios from 'axios'
import userimg from "../assets/images/be.png"
import trustimg from "../assets/images/trust.png"
import SecondHeader from './SecondHeader'
import SubscibedPlan from './SubscibedPlan'
import {VscAccount} from "react-icons/vsc"
import {FiSettings} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdOutlineLogout} from "react-icons/md"
import {AiOutlineDollarCircle} from "react-icons/ai"
import Loadingimg from "../assets/images/loading.gif"
import { Link } from "react-router-dom";



import { API } from "./Constant";

import { ToastContainer, toast } from "react-toastify";



const New_profile = () => {
    const [showModal, setShowModal] = useState(false); // modal for password update
    const [showPlans, SetShowPlans] = useState(false);
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
    const [isLoading, setIsLoading] = useState(false)

  
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
        <>
        <div>
            <SecondHeader />

         
             <section className='pt-16'>
                <div className='lg:w-full lg:min-h-[100vh] sm:flex' >
                    <div className='bg-[#f0f0f0]'>
                        <div className='p-4  flex flex-col'>
                            <div className='shrink-0 w-full min-w-[200px]'>
                                <img src={user.image} alt="userprofile" 
                                    className='rounded-full m-auto w-[200px] h-[200px]' />
                            </div>
                            <div>
                                <div className='text-xl font-semibold flex justify-center'>
                                {user.name}
                                </div>
                            </div>
                        </div>

                        <div className='pt-3'>
                            <ul className="menu bg-base-100 lg:w-full rounded-none flex flex-row justify-evenly sm:block">
                                <li className='active:bg-red-300' onClick={() =>setUserSettingModal(!userSettingModal)}>
                                    <a>
                                        <VscAccount size={18} />
                                        Account
                                    </a>
                                </li>
                                {/* <li>
                                    <a>
                                        <FiSettings size={18}/>
                                        Setting
                                    </a>
                                </li> */}
                                 <li onClick={()=> SetShowPlans(!showPlans)}>
                                    <a>
                                        <AiOutlineDollarCircle size={18}/>
                                        Plans
                                    </a>
                                </li>
                                <li onClick={() => setShowModal(!showModal)}>
                                    <a>
                                       <RiLockPasswordLine size={18}/>
                                        Password
                                    </a>
                                </li>
                                <li onClick={() =>UserLogut()}>
                                    <a>
                                    <MdOutlineLogout size={18}/>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* ==========sidebar end========== */}

                    {/* =============profile information start============ */}
                    <div className='p-6 sm:p-10 w-full  '>
                        <div className='p-3 px-6  bg-gradient-to-b from-[#A5C5EE] to-white rounded-md'>
                            <div className='flex justify-start items-center w-full'>
                                <div className='lg:w-[110px] lg-h-[110px] w-full h-[100px] w-[100px] shrink-0 mr-2'>
                                    <img src={trustimg} alt=""
                                        className='rounded-full mr-2 w-full object-cover' />
                                </div>
                                <div>
                                    <h1 className='text-xl sm:text-3xl font-bold'>Personal Information</h1>
                                </div>
                            </div>
                        </div>

                        {/* =========input fields start==== */}
                        <div className=' md:flex lg:flex'>
                            <div className='mt-4 w-full px-4'>
                                <div className='font-semibold'>
                                    Uniquekey
                                </div>
                                <div>
                                    <input type="text" value={user.uniqueKey} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none  sm:p-3 md:h-[36px]" readOnly />
                                </div>
                            </div>
                            <div className='mt-4 w-full px-4'>
                                <div className='font-semibold'>
                                    Username
                                </div>
                                <div>
                                    <input type="text" value={user.username} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='md:flex lg:flex'>
                            <div className='mt-4 w-full px-4'>
                                <div className='font-semibold'>
                                    Email
                                </div>
                                <div>
                                    <input type="text" value={user.email} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly />
                                </div>
                            </div>
                            <div className='mt-4 w-full px-4'>
                                <div className='font-semibold'>
                                    Phone
                                </div>
                                <div>
                                    <input type="text" value={user.phone} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly/>
                                </div>
                            </div>
                        </div>

                        <div className='md:flex lg:flex'>
                            <div className='mt-4 w-full px-4'>
                                <div className='font-semibold'>
                                    Country
                                </div>
                                <div>
                                    <input type="text" value={user.country} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly/>
                                </div>
                            </div>
                            <div className='mt-4 w-full px-4'>
                                <div className='font-semibold'>
                                    Address
                                </div>
                                <div>
                                    <input type="text" value={user.address} className="input input-bordered w-full border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly/>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* <SubscibedPlan /> */}
                        </div>


                    </div>

                </div>

                  {/* -----------------MODAL POPUP FOR PASSWORD UPDATE------------------ */}
            {showModal ? (
              <>
                <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto md:my-6 my-24 md:mt-0 mt-[350px] md:p-0 p-4 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 mt-[150px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                        <div className="border-0 mt-[150px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                ) : null}
            </div>

                    {/* -----------------MODAL POPUP FOR PLANS------------------ */}
                    {showPlans ? (
              <>
                <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto md:my-6 my-24 md:mt-0 mt-[350px] md:p-0 p-4 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 mt-[150px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Your active plan
                        </h3>

                        <button
                          className="btn btn-circle btn-sm btn-outline  hover:bg-[#05232A] p-1 ml-auto     text-black  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => SetShowPlans(false)}
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
                    <SubscibedPlan />
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-600  border hover:border hover:border-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => SetShowPlans(false)}
                        >
                          Close
                        </button>
                        <Link to="/">
                        <button 
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button">
                          Change plan
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

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
            
        </div>
           


        </>


    )
}

export default New_profile