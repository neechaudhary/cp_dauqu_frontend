import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { API } from "./Constant";

function SubscibedPlan() {
  const [plan, setPlan] = useState([]);
  const [user, setUser] = useState([]);
  const [uniqueKey, setUniqueKey] = useState("");
  const [fulldetails, setFulldetails] = useState([]);

  const [plan_Slug, setPlan_Slug] = useState([]);
  // code to get user and its userUniqueKey-----------
  async function GetUsers() {
    try {
      const response = await axios.get(`${API}/profile`, {
        withCredentials: true,
      });
      setUser(response.data.data);
      // console.log(response.data.data);
      setUniqueKey(response.data.data.uniqueKey);
      getplan(response.data.data.uniqueKey);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetUsers();
  }, []);

  // code to get order details by uniqueKey-----------
  async function getplan(uniqueKey) {
    try {
      const resp = await axios.get(`${API}/orders/userUniqueKey/${uniqueKey}`);
      setPlan(resp.data);
      setFulldetails(resp.data[0]);
      getplandetailsbyslug(resp.data[0].product_slug);
      console.log(resp.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  // code to get plan details by slug----------
  async function getplandetailsbyslug(plan_Slug) {
    try {
      const resp = await axios.get(`${API}/plans/${plan_Slug}`);
      setPlan_Slug(resp.data[0]);
      // console.log(resp.data[0]);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {plan.length > 0 ? (
        <>
          <div className="p-4 mt-4">
            <div className="p-2 text-[20px] font-bold">
              Thankyou for purchasing 👍{" "}
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <span>Plan Name: </span> {plan_Slug.plan_name}
                </h2>
                <p>Information of your plan</p>
                <div>
                  <div className="md:flex items-center">
                    <div className="p-2 font-semibold"> Amount:</div>
                    {fulldetails.product_price.length <= 2 ? (
                      <>
                        <div className="p-2">${fulldetails.product_price}</div>
                      </>
                    ) : (
                      <>
                        <div className="p-2 flex items-center">
                          <BiRupee />
                          {fulldetails.product_price}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="md:flex items-center">
                    <div className="p-2 font-semibold"> Start Date:</div>
                    <div className="p-2">{fulldetails.plan_start_date}</div>
                  </div>
                  <div className="md:flex items-center">
                    <div className="p-2 font-semibold"> Expiry Date:</div>
                    <div className="p-2"> {fulldetails.plan_expiry_date}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 mt-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Not Subscribed yet ?</h2>

                <p className="text-[18px]">
                  Why you dont have purchase any plan yet! 🤔 . Go and grab the
                  deal 👍 with best price range according to your needs.
                </p>

                <div className="card-actions justify-end">
                  <Link to="/">
                    <button className="btn btn-outline btn-accent">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SubscibedPlan;
