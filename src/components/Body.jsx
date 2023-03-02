import React, { useState } from "react";
import img from "../assets/images/ar.png";
import img1 from "../assets/images/gii.png";
import img2 from "../assets/images/nf.png";
import img3 from "../assets/images/en.png";
import img4 from "../assets/images/sl.png";
import get_code from "../assets/images/get_code_gif.gif"
import docker_gif from "../assets/images/docker_gif.gif"
import docker_image_gif from "../assets/images/docker_image_gif.gif"
import connect_domain from "../assets/images/connect_domain_gif.gif"

import push_to_deploy from "../assets/images/push_to_deploy.svg"
import free_ssl from "../assets/images/free_ssl.svg"
import one_click_app from "../assets/images/one_click_app.svg"
import zero_downtime from "../assets/images/zero_downtime.svg"
import in_browser from "../assets/images/in_browser.svg"
import dockerfile_not_required from "../assets/images/dockerfile_not_required.svg"






import { AiFillEye } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoImagesSharp } from "react-icons/io5";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr"

import {
  FaGooglePlay,
  FaMobile,
  FaEdit,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import { AiFillSetting, AiFillDollarCircle, AiFillStar } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { BiCodeAlt, BiLink } from "react-icons/bi";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { MdFormatQuote } from "react-icons/md";
import user from "../assets/images/user.png";
import user2 from "../assets/images/user2.png";
import { FiMonitor } from "react-icons/fi";
import { GiElectric } from "react-icons/gi";
import { GrAmazon, GrStatusGood } from "react-icons/gr";
import { BsCloudDownloadFill } from "react-icons/bs";
import { SiAppstore } from "react-icons/si";
import run from "../assets/images/run.png";
import trust from "../assets/images/trust.png";
import anl from "../assets/images/anl.png";
import lock from "../assets/images/lock.png";
import bgg from "../assets/images/bgg.png";
import bg from "../assets/images/bg.png";
import back from "../assets/images/back.png";
import "../assets/css/Body.css";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import ImgSlider from "./ImgSlider";
import ss2 from "../assets/images/ss2.png";
import ss5 from "../assets/images/s_s11.png";
import ss3 from "../assets/images/s_s13.png";
import Icons_slider from "./Icons_slider";
import axios from "axios";
import { API } from "./Constant";
import { Link } from "react-router-dom";

function Body() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const [plans, setPlans] = useState([]);
  const handlePlans = async () => {
    try {
      const res = await axios.get(`${API}/plans`);
      setPlans(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePlans();
  }, []);

  // code for copy to clipboard
  // const copyToClipboard = (e) => {
  //   var textField = document.createElement("textarea");
  //   textField.innerText = e;
  //   document.body.appendChild(textField);
  //   textField.select();
  //   document.execCommand("copy");
  //   textField.remove();
  // };

  return (
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
      {" "}
      <div className="">
        <div className="imagecontiner relative sm:top-0">
          <div
            style={{
              position: "relative",
              top: "-180px",
              margin: "auto",
              borderRadius: "8px",
              width: "85%",
            }}
            alt=""
            className="backimg  "
          >
            <Slider />
          </div>
        </div>

        <div>
          <div className="p-2">
            <Icons_slider />
          </div>
        </div>
        {/* testimonials contet  */}
        <div className="bg-[#FAFAFA] items-center p-8 xl:p-16   ">
          <div className="text-[#333333] md:text-[40px] flex justify-center font-bold mb-6">
            Testimonials
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center   m-auto pt-8 w-full">
            <div className="card rounded-none md:m-2  md:mt:0 mt-4 md:w-96 w-full   bg-base-100 ">
              <figure className="px-10 pt-10">
                <BsCloudDownloadFill size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">100 Downloads</h2>
                <p>They all are satisfied with our service 👍</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            <div className="card rounded-none md:m-2 md:mt:0 mt-4  md:w-96 w-full  bg-base-100 ">
              <figure className="px-10 pt-10">
                <FaUsers size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">10 User's</h2>
                <p>They all are satisfied with our service 👍</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            <div className="card rounded-none md:m-2 md:mt:0 mt-4 md:w-96 w-full   bg-base-100 ">
              <figure className="px-10 pt-10">
                <GiElectric size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Instant Solution</h2>
                <p>They all are satisfied with our service 👍</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* middle content */}
        <div className="bg-[#FAFAFA] items-center  xl:p-16   ">
          <div className="items-center flex justify-center">
            <AiFillEye
              className="shadow-sm"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="text-[#333333] md:text-[40px] flex justify-center font-bold mb-6">
            Lets See How it Works
          </div>
          <div className="flex flex-col md:flex-row justify-evenly  flex-wrap items-stretch m-auto pt-8 w-full">
            <div className="bg-[#FFFFFF] p-3 xl:p-6  text-center items-center md:w-1/2 lg:w-1/4 xl:max-w-[300px] md:m-0  m-5 md:my-0 flex flex-col ">
              <div className="w-full">
                {/* <BiCodeAlt size={30} />  */}
                <img src={get_code} className=" w-full md:h-[180px] h-[225px] sm:h-[275px]" alt="get code" />
              </div>

              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Get Code
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow ">
                Code will get from Github: This step involves pulling the source
                code for the admin panel from a Github repository. This allows
                the panel to be easily updated and maintained, as well as
                allowing multiple developers to collaborate on the project.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] border-2 border[#588992] p-2 text-[#588992] font-semibold hover:bg-[#165461] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center md:w-1/2 lg:w-1/4 md:m-0 xl:max-w-[300px] m-5 md:my-0 flex flex-col">
              <div className="w-full">
                {/* <IoImagesSharp size={30} /> */}
                <img src={docker_gif} className=" w-full md:h-[180px] h-[225px] sm:h-[275px]" alt="create docker image" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Create Image
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow flex items-end flex-col">
                Create Docker image in backend: Next, the source code is used to
                create a Docker image, which is essentially a lightweight,
                portable version of the admin panel that can be run on any
                machine that has Docker installed.
                {/* This step allows the panel to
                be easily deployed to a variety of different environments. */}
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center md:w-1/2 lg:w-1/4 md:m-0 xl:max-w-[300px]  m-5 md:my-0 flex flex-col">
              <div className="w-full">
                {/* <FaDocker size={30} /> */}
                <img src={docker_image_gif} className=" w-full md:h-[180px] h-[225px] sm:h-[275px]" alt="Docker container" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Docker Container
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow ">
                Run Container: After the Docker image is created, the next step
                is to run a container using the image. A container is a running
                instance of the image, and it allows the admin panel to be
                accessed and used by the user.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center md:w-1/2 lg:w-1/4 md:m-0 xl:max-w-[300px]  m-5 md:my-0 flex flex-col">
              <div className="w-full">
                {/* <RiSecurePaymentFill size={30} /> */}
                <img src={connect_domain} className=" w-full md:h-[180px] h-[225px] sm:h-[275px]" alt="connect domain" />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Proxy Link
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow">
                Connect to domain with proxy: Once the container is running, the
                final step is to connect it to a domain and proxy.
                {/* A domain is aunique name that identifies the admin panel on the internet,
                while the proxy is used to route traffic to the container
                running the panel. */}
                This allows the user to access the panel by
                navigating to the domain in their web browser.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF]  hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* download the app content  */}
        <div className="w-full m-auto bg-[#FFFFFF]    lg:flex p-[30px] xl:p-[50px]">
          <div className="lg:w-1/2 w-full lg:m-4 m-0">
            <img
              src={ss5}
              style={{ width: "100%" }}
              alt=""
              className="p-2 bg-slate-500 rounded "
            />
          </div>
          <div className="lg:w-1/2 md:pt-0 pt-6 w-full lg:m-4 m-0">
            <img
              src={ss3}
              style={{ width: "100%" }}
              alt=""
              className="p-2 bg-slate-500 rounded "
            />
          </div>
        </div>
        {/* services content */}
        <div className="bg-[#FAFAFA] p-3 xl:p-8">
          <div className="items-center flex justify-center">
            <AiFillSetting
              className="shadow-sm"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="w-[70%] m-auto text-center md:text-[40px]  text-[#333333] mt-8 font-bold">
            Easily Integrate with your favorite Services
          </div>
          <div className="flex flex-col md:flex-row sm:p-0 md:p-8 items-center   m-auto  justify-evenly">
            <div className="card rounded-none flex bg-[#FFFFFF] p-4 md:m-2  md:mt:0 mt-4 md:w-96 w-full  min-h-60vh   my-5 md:my-0">
              <div className="pb-4  m-auto  ">
                {/* <AiFillBulb
                  style={{
                    color: "#F9A901",
                    fontSize: "40px",
                    background: "#FEF7E6",
                    padding: "4px",
                  }}
                /> */}
                <img src={push_to_deploy} alt="push to deploy" />
              </div>
              <div className="ml-4 ">
                <div className="text-[#5C5C5C] text-[20px] text-center pb-2 font-bold">
                  {/* Push to deploy */}
                  Push to deploy
                </div>
                <div className="text-[#808080] text-center">
                  {/* Our use-case driven deployment options shorten time to value, allowing your business to concentrate on what matters most—detection, investigation, and threat response. */}
                  Enter the name of project and the generated Deployment URL in the “GIT URL” field with port number and click on “Deploy” button.
                </div>
                {/* <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] text-center hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
            <div className="card  rounded-none flex bg-[#FFFFFF] p-4 md:m-2  md:mt:0 mt-4 md:w-96 w-full min-h-60vh   my-5 md:my-0">
              <div className=" pb-4 m-auto  ">
                {/* <GrUserExpert
                  style={{
                    color: "#48CB8A",
                    fontSize: "40px",
                    background: "#E8FAF4",
                    padding: "6px",
                    
                  }}
                /> */}
                <img src={free_ssl} alt="free ssl certificates" />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center text-[20px] text-center pb-2 font-bold">
                  {/* Experts validation */}
                  Free SSL Certificates
                </div>
                <div className="text-[#808080] text-center">
                  {/* In order to create a solution that satisfies your business objectives, our team of professionals works together with you to assess your goals, plan your deployment, and implement your solution. */}
                  Get auto-renewable SSL certificates that enables websites to move from HTTP to HTTPS, which is more secure.Let's Encrypt certificates.
                </div>
                {/* <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
            <div className="card rounded-none  flex bg-[#FFFFFF] p-4 md:m-2  md:mt:0 mt-4 md:w-96 w-full  min-h-60vh my-5 md:my-0">
              <div className="pb-4 m-auto  ">
                {/* <FaEdit
                  style={{
                    color: "#831FFE",
                    fontSize: "40px",
                    background: "#F3E8FF",
                    padding: "4px",
                    margin: "auto",
                  }}
                /> */}
                <img src={one_click_app} alt="one click app" />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center text-[20px] text-center pb-2 font-bold">
                  {/* Flexible Plan */}
                  One-Click Apps
                </div>
                <div className="text-[#808080] text-center">
                  {/* The spark plan helps you start free for 5 days to explore and test your applications, and is chargable on a usage basis after that. You can check out our plans. */}
                  Find an app that works for you, then launch it in no more than two minutes. Many one-Click Apps accessible like WordPress, LAMP etc.
                </div>
                {/* <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:p-8 sm:p-0 items-center   m-auto  justify-evenly">
            <div className="card  rounded-none flex bg-[#FFFFFF] p-4 md:m-2  md:mt:0 mt-4 md:w-96 w-full min-h-60vh  my-5 md:my-0">
              <div className="pb-4 m-auto  ">
                {/* <FaDatabase
                  style={{
                    color: "#F78F71",
                    fontSize: "40px",
                    background: "#FEF4F1",
                    padding: "4px",
                  }}
                /> */}
                <img src={zero_downtime} alt="zero downtime deployments" />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center text-[20px] text-center pb-2 font-bold">
                  {/* Serverless Solutions */}
                  Zero Downtime Deployments
                </div>
                <div className="text-[#808080] text-center">
                  {/* We are following the latest trend in this cloud-arena. Since this is a fully managed platform, deployment and post-deployment issues are not a concern. */}
                  Dauqu will do it in such a way that the you will not aware of any downtime taking place while you deploy the new version of the application.
                </div>
                {/* <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
            <div className="card rounded-none  flex bg-[#FFFFFF] p-4 md:m-2  md:mt:0 mt-4 md:w-96 w-full min-h-60vh  my-5 md:my-0">
              <div className="pb-4 m-auto ">
                {/* <BiLink
                  style={{
                    color: "#165461",
                    fontSize: "40px",
                    background: "#E6EEF0",
                    padding: "4px",
                  }}
                /> */}
                <img src={in_browser} alt="In-Browser terminal" />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center  text-[20px] text-center pb-2 font-bold">
                  {/* Stronger security */}
                  In-Browser Terminal
                </div>
                <div className="text-[#808080] text-center ">
                  {/* One of the final stages in delivering secure software is ensuring the security and integrity of developed applications are not compromised during deployment */}
                  Dauqu’s browser-based terminal renders a fully functional console that a user can launch with a single click.
                </div>
                {/* <div className="mt-4 text-center ">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
            <div className="card  rounded-none flex bg-[#FFFFFF] p-4 md:m-2  md:mt:0 mt-4 md:w-96 w-full min-h-60vh  my-5 md:my-0">
              <div className="pb-4 m-auto">
                {/* <BsFillFileEarmarkCodeFill
                  style={{
                    color: "#1D86FF",
                    fontSize: "40px",
                    background: "#E6F3FF",
                    padding: "4px",
                  }}
                /> */}
                <img src={dockerfile_not_required} alt="dockerfile not required" />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center  text-[20px] text-center pb-2 font-bold">
                  {/* vast language support */}
                  Dockerfile not required
                </div>
                <div className="text-[#808080] text-center ">
                  {/* You can deploy applications built with Java, Python, Node.js, Go, and many more. This makes Dauqu different from other platforms.You can also deploy container images and static sites */}
                  With Docker, it is easy to package your code into an image that we can run anywhere, anytime.
                </div>
                {/* <div className="mt-4 text-center ">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* plan choose content */}
        <div className="bg-[#FAFAFA] p-8  " id="plans">
          <div className="items-center flex justify-center">
            <AiFillDollarCircle
              className="shadow-sm"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div id="element" className="w-[70%] m-auto text-center md:text-[40px] text-[#333333] mt-8 font-bold">
            Choose our price plan
          </div>
          <div className=""></div>
          <div className="flex flex-col md:flex-row  items-center   m-auto justify-center">
            {/* map funtion */}
            {/* {plans.map((plan, key) => ( */}
            <>
              <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
                <div className="text-[#22616C] font-semibold mt-4">
                  {/* {plan.plan_name} */}
                  Basic
                </div>
                <div>
                  <span className="text[#222222] font-bold text-[40px] mt-4 ">
                    {/* ${plan.plan_price} */}
                    $11
                  </span>
                  {/* /{plan.billing_cycle} */}
                  Monthly
                </div>
                <div className="mt-2 text-[15px] font-semibold">
                  {/* {plan.plan_title} */}
                  Useful
                </div>
                <hr className="mt-4" />
                <div className="mt-4">
                  <Link to={`/cart/QFRAH`}>
                  <button
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </button>
                  </Link>
                </div>
                <hr className="mt-4" />
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_one} */}
                    Deploy Unlimited websites
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_two} */}
                    Unlimited database account
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_three} */}
                    Free SSL Support
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_four} */}
                    Support Multiple Languages
                  </div>
                </div>
                {/* <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">10 Photo Assets</div>
              </div> */}
                <hr className="mt-4" />
                <div className=" mt-4 text-left">Dauqu</div>
                {/* <div className="mt-2 text-left">
                    {plan.plan_transaction_fee}% transaction fee
                  </div> */}
              </div>

              <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
                <div className="text-[#22616C] font-semibold mt-4">
                  {/* {plan.plan_name} */}
                  Popular
                </div>
                <div>
                  <span className="text[#222222] font-bold text-[40px] mt-4 ">
                    {/* ${plan.plan_price} */}
                    $29
                  </span>
                  {/* /{plan.billing_cycle} */}
                  Quarterly
                </div>
                <div className="mt-2 text-[15px] font-semibold">
                  {/* {plan.plan_title} */}
                  Benefial
                </div>
                <hr className="mt-4" />
                <div className="mt-4">
                  <Link to={`/cart/KNRBI`}>
                  <button
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </button>
                  </Link>
                </div>
                <hr className="mt-4" />
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_one} */}
                    Deploy Unlimited websites
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_two} */}
                    Unlimited database account
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_three} */}
                    Free SSL Support
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_four} */}
                    Support Multiple Languages
                  </div>
                </div>
                {/* <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">10 Photo Assets</div>
              </div> */}
                <hr className="mt-4" />
                <div className=" mt-4 text-left">Dauqu</div>
                {/* <div className="mt-2 text-left">
                    {plan.plan_transaction_fee}% transaction fee
                  </div> */}
              </div>
              <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
                <div className="text-[#22616C] font-semibold mt-4">
                  {/* {plan.plan_name} */}
                  Premium
                </div>
                <div>
                  <span className="text[#222222] font-bold text-[40px] mt-4 ">
                    {/* ${plan.plan_price} */}
                    $115
                  </span>
                  {/* /{plan.billing_cycle} */}
                  Yearly
                </div>
                <div className="mt-2 text-[15px] font-semibold">
                  {/* {plan.plan_title} */}
                  Advanced
                </div>
                <hr className="mt-4" />
                <div className="mt-4">
                  <Link to={`/cart/FS8EC`}>
                  <button
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </button>
                  </Link>
                </div>
                <hr className="mt-4" />
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_one} */}
                    Deploy Unlimited websites
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_two} */}
                    Unlimited database account
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_three} */}
                    Free SSL Support
                  </div>
                </div>
                <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                  <div className="">
                    <GoCheck />
                  </div>
                  <div className="ml-2">
                    {/* {plan.plan_info_four} */}
                    Support Multiple Languages
                  </div>
                </div>
                {/* <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">10 Photo Assets</div>
              </div> */}
                <hr className="mt-4" />
                <div className=" mt-4 text-left">Dauqu</div>
                {/* <div className="mt-2 text-left">
                    {plan.plan_transaction_fee}% transaction fee
                  </div> */}
              </div>
            </>
            {/* ))} */}

            {/* <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
              <div className="text-[#22616C] font-semibold mt-4">Standard</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan2}
                </span>
                /month
              </div>
              <div className="mt-2 text-[15px] font-semibold">
                Billed Monthly
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                  onClick={() => {
                    window.open("https://buy.stripe.com/3csdRz9aCbFI1RC145");
                  }}
                >
                  Buy Package
                </button>
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Deploy 15 websites</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">25 Databases accounts</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Free SSL Support</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">HTML, PHP, Nodejs, Python</div>
              </div>
              <hr className="mt-4" />
              <div className=" mt-4 text-left">Dauqu</div>
              <div className="mt-2 text-left">0% transaction fee</div>
            </div>
            <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
              <div className="text-[#22616C] font-semibold mt-4">Pro</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan3}
                </span>
                /month
              </div>
              <div className="mt-2 text-[15px] font-semibold">
                Billed Monthly
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                  onClick={() => {
                    window.open("https://buy.stripe.com/eVabJr0E6cJM2VG9AC");
                  }}
                >
                  Buy Package
                </button>
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Unlimited websites</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Unlimited databases accounts</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Free SSL</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Support all languages</div>
              </div>
              <hr className="mt-4" />
              <div className=" mt-4 text-left">Dauqu</div>
              <div className="mt-2 text-left">0% transaction fee</div>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Body;
