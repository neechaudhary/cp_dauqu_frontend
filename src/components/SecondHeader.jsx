import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { API } from "./Constant";

function SecondHeader() {
  // --------------
  const [user, setUser] = useState("");
  // console.log(user.length);
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
  console.log(user.length);
  return (
    <div className="  bg-[#165461]  fixed top-0 w-full   ">
      <nav className="w-full bg-[#01232a] ">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-4 md:block">
              <Link to="/">
                <h2 className="text-2xl text-[white] font-bold">Dauqu</h2>
              </Link>
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

                <li className="btn btn-ghost text-[white] hover:cursor-pointer p-2   ">
                  Contact US
                </li>

                {user.length == 0 ? (
                  <Link to="/login">
                    <li className="btn btn-ghost text-[white] hover:cursor-pointer p-2   ">
                      Login
                    </li>
                  </Link>
                ) : (
                  <Link to="/profile">
                    <li className="btn btn-ghost text-[white] hover:cursor-pointer p-2    ">
                      Profile
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div className="min-w-[120px] hidden md:block">
            <Link to="/">
              <button className="btn btn-outline btn-accent rounded-none btn-sm">
                Install Now
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SecondHeader;
