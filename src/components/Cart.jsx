import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { BiCreditCard } from "react-icons/bi";
import { SiRazorpay } from "react-icons/si";
import SecondHeader from "./SecondHeader";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStripeS } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import axios from "axios";
import { API } from "./Constant";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import ck from "../assets/images/ck.svg";
import loginplease from "../assets/images/loginPlease.jpg";
import rpay from "../assets/images/razorpay.svg";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function Cart() {
  const [hiddendiv, setHiddendiv] = useState(false);
  const [paypalPaymentSuccess, setPaypalPaymentSuccess] = useState(false); // for paypal payment success message
  const notif = () => {
    toast.success("Thankyou 👍 for choosing our plan.", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // scroll to top function
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
  const user_uniqueKey = user.uniqueKey;
  // console.log(user_uniqueKey);

  const { slug } = useParams();
  const [cart, setCart] = useState({});
  // get plan by slug
  const getPlanBySlug = async (slug) => {
    await axios
      .get(`${API}/plans/${slug}`)
      .then((res) => {
        setCart(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPlanBySlug(slug);
  }, [slug]);

  const paypal_payment = cart.plan_price;

  // console.log(paypal_payment);
  const [successPayment, setSuccessPayment] = useState([]);
  // code to post success payment response to backend
  const handleSuccess = (details) => {
    axios
      .post(`${API}/orders`, {
        order_id: details.id,
        order_by: details.payer.name.given_name,
        date: details.create_time,
        status: details.status,
        phone_number: details.payer.phone.phone_number.national_number,
        email: details.payer.email_address,
        payment_Status: details.purchase_units[0].payments.captures[0].status,
        product_slug: cart.plan_slug,
        product_price: details.purchase_units[0].amount.value,
        city: details.payer.address.admin_area_2,
        country: details.payer.address.country_code,
        order_status: details.status,
        userUniqueKey: user_uniqueKey,
        months: cart.plan_duration,
        payment_method: "paypal",
      })
      .then((res) => {
        console.log(res);
        notif();
        setPaypalPaymentSuccess(true);
        setTimeout(() => {
          window.location.href = "/profile";
        }, [3000]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // razor pay----------------------------------------------------------------
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    //  var amount = paypal_payment;
    var options = {
      key: "rzp_test_fYtFrx227DT8xU", // Enter the Key ID generated from the Dashboard
      amount: Number(cart.plan_price * 100 * 80),
      currency: "INR",
      description: "Acme Corp",
      image: "https://avatars.githubusercontent.com/u/95732637?v=4",
      prefill: {
        email: "gaurav.kumar@example.com",
        contact: +919900000000,
      },

      handler: function (response) {
        alert(response.razorpay_payment_id);
        // console.log(response);
        axios
          .post(`${API}/orders`, {
            // generate order id randomly
            order_id: Math.floor(Math.random() * 100000000000000),
            order_by: user.name,
            date: new Date().toLocaleString(),
            status: "success",
            phone_number: user.phone,
            email: user.email,
            payment_Status: "success",
            product_slug: cart.plan_slug,
            product_price: Number(cart.plan_price * 80),
            city: user.address,
            country: user.country,
            order_status: "success",
            userUniqueKey: user_uniqueKey,
            months: cart.plan_duration,
            payment_method: "razorpay",
          })
          .then((res) => {
            console.log(res);
            notif();
            setPaypalPaymentSuccess(true);
            setTimeout(() => {
              window.location.href = "/profile";
            }, [3000]);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      modal: {
        ondismiss: function () {
          if (alert("Are you sure, you want to close the form?")) {
            var txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment");
          }
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="">
      <div className="">
        <SecondHeader />
      </div>
      {user.length !== 0 ? (
        <div className="bg-[#fbfbfb] md:p-6 p-4 mt-16">
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
            <div className="md:p-10 p-4 bg-[white]  m-auto   shadow-xl lg:w-[1000px] w-full">
              <div className="p-6 m-auto flex items-center justify-between">
                <div className="md:w-[200px] w-auto   text-[22px] font-bold text-[#393C3F]">
                  Cart
                </div>
                <div className="flex items-center">
                  <div className="md:w-[70px] w-auto text-[#626262] cursor-pointer">
                    <BsHandbag />
                  </div>
                </div>
              </div>
              <div className="md:flex mt-2 p-4">
                <div className="md:w-1/2 w-[300px] md:m-2 m-auto md:pb-0 pb-12 md:p-6 p-2">
                  <div className="text-[22px] p-2 text-[#393C3F] font-semibold">
                    <div className="">Shopping Cart</div>
                  </div>
                  <div className="">
                    <div className="cardd shadow-md border md:w-[270px]  w-full md:mt-8   md:p-6 p-4 bg-[#FFFFFF] text-left   ">
                      <div className="text-[#22616C] font-semibold mt-4">
                        {cart.plan_name}
                      </div>
                      <div>
                        <span className="text[#222222] font-bold text-[40px] mt-4 ">
                          ${cart.plan_price}
                        </span>
                        /{cart.billing_cycle}
                      </div>
                      <hr className="mt-4" />
                      <div className="text-[#383838] font-semibold mt-6">
                        {cart.plan_info_one}
                      </div>
                      <div className="text-[#383838] font-semibold mt-6">
                        {cart.plan_info_two}
                      </div>
                      <div className="text-[#383838] font-semibold mt-6">
                        {cart.plan_info_three}
                      </div>
                      <div className="text-[#383838] font-semibold mt-6">
                        {cart.plan_info_four}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8  flex items-center  ">
                    <Link to="/">
                      <div className="w-[200px]  text-[17px] font-semibold hover:text-[#165461]">
                        Continue Shopping
                      </div>
                    </Link>
                    <div className="text-[17px] font-semibold">
                      Total -{" "}
                      <span className=" text-[20px] font-bold">
                        ${cart.plan_price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 w-full m-2   text-[#393C3F] font-semibold md:p-6   bg-[#FAFAFA] rounded-[5px]">
                  <div className="text-center items-center">
                    <button
                      className="btn btn-success w-full font-bold    "
                      onClick={() => setHiddendiv(!hiddendiv)}
                    >
                      Checkout
                    </button>
                  </div>
                  {hiddendiv ? (
                    <>
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.7, stiffness: 500 }}
                        className="mt-12"
                      >
                        <PayPalScriptProvider>
                          <PayPalButtons
                            createOrder={(data, actions) => {
                              return actions.order.create({
                                purchase_units: [
                                  {
                                    amount: {
                                      value: paypal_payment,
                                    },
                                  },
                                ],
                              });
                            }}
                            onApprove={(data, actions) => {
                              return actions.order
                                .capture()
                                .then(function (details) {
                                  handleSuccess(details);
                                  console.log(details);
                                  alert(
                                    "Transaction completed by " +
                                      details.payer.name.given_name
                                  );
                                  // Call your server to save the transaction
                                })
                                .catch((err) => {
                                  console.log(err);
                                });
                            }}
                          />
                        </PayPalScriptProvider>
                        <div className="w-full mt-4">
                          <button
                            className="btn  w-full rounded-[3px] flex justify-center text-[15px] "
                            onClick={displayRazorpay}
                          >
                            <div className="w-auto">
                              {/* <SiRazorpay /> */}
                              <img
                                src={rpay}
                                className="w-[48px] h-[48px]"
                                alt=""
                                srcset=""
                              />
                            </div>
                            <div>
                              <p className="italic ">RazorPay</p>
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <div className="mt-16">
                        <img src={ck} alt="" srcset="" className="m-auto" />
                      </div>
                      <div className="mt-14 text-center   ">
                        <span className="text-[20px]">Clcik&nbsp;</span>
                        <span className="font-bold text-[20px]">Checkout</span>
                        <span className="text-[20px]"> to purchase Plan</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {paypalPaymentSuccess ? (
                <>
                  <ToastContainer
                    position="top-right"
                    autoClose={2500}
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
            </div>
          </motion.div>
        </div>
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

export default Cart;
