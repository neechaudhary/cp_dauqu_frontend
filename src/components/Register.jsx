import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SecondHeader from "./SecondHeader";
import { useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { API } from "./Constant";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [toastify, setToastify] = useState(false); // toastify state
  const [toastifySuccess, setToastifySuccess] = useState(false); // toastify state for success
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const notify = () =>
    toast.error("Invalid Details!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifySuccess = () =>
    toast.success("Registered Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // axios signup function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("country", country);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("picture", image);

    const resp = axios
      .post(`${API}/signup`, formData)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setToastifySuccess(true);
          notifySuccess();
        }
        setTimeout(() => {
          navigate("/login");
        }, [2500]);
      })
      .catch((err) => {
        console.log(err);
        // alert("Invalid Credentials");
        setToastify(true);
        notify();
      });
  };

  return (
    <div>
      {/* header nav */}
      <SecondHeader />
      {/* main cont */}
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
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12  mb-12 md:mb-0">
                <Link to="/">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                  />
                </Link>
              </div>

              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 w-[90%] mb-12 md:mb-0">
                <form className="pb-[50px]" onSubmit={(e) => handleSubmit(e)}>
                  {/* Email input */}
                  <div className="mb-6">
                    <input
                      type="text"
                      name={name}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name={username}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name={email}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* Password input */}
                  <div className="mb-6">
                    <input
                      type="password"
                      name={password}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name={phone}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name={country}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="text"
                      name={address}
                      className="input input-bordered w-full "
                      id="exampleFormControlInput2"
                      placeholder="City"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="file"
                      name="picture"
                      onChange={(e) => setImage(e.target.files[0])}
                      placeholder="User Title"
                      id="list_name"
                      className="style_input  text-base border-2 outline-none"
                    />
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="button"
                      className="btn btn-sm   w-full lg:w-32 rounded-none  bg-[#05232A] hover:bg-[#247572]"
                      onClick={(e) => handleSubmit(e)}
                    >
                      SignUp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {toastify ? (
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
          {toastifySuccess ? (
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
        </section>
      </motion.div>
    </div>
  );
}

export default Register;
