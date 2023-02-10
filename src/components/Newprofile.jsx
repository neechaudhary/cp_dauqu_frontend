import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Newprofile() {
  // handleLogout
  const HandleUpdate = () => {
    window.alert("This feature will be available soon.");
  };
  return (
    <div className="bg-[white] shadow-xl w-[900px]   m-auto flex   ">
      <div className="border w-[200px] ">
        <div className="p-4  text-left">
          <div className="w-[150px] m-auto ">
            <img
              src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
              className="rounded-full"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex items-center">
            <div className="text-[22px]  font-semibold mt-2 text-center">
              Kiran Acharya
            </div>
            <div className="">
                <BsFillPatchCheckFill style={{fontSize:"23px",color:"#3392E9",textAlign:"center"}}/>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="">
            <button className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#177DFE] justify-center hover:text-[white]  p-4 ">
              <div className="w-[30px]">
                <AiFillHome />
              </div>
              <div className="">Account</div>
            </button>
          </div>
          <div className="">
            <button
              className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#177DFE] justify-center hover:text-[white]  p-4 "
              onClick={() => HandleUpdate()}
            >
              <div className="w-[30px]">
                <FaUserAlt />
              </div>
              <div className="">Security</div>
            </button>
          </div>
          <div className="">
            <button
              className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#177DFE] justify-center hover:text-[white]  p-4 "
              onClick={() => HandleUpdate()}
            >
              <div className="w-[30px]">
                <FaKey />
              </div>
              <div className="">Password</div>
            </button>
          </div>
          <div className="">
            <button
              className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#177DFE] justify-center hover:text-[white]  p-4 "
              onClick={() => HandleUpdate()}
            >
              <div className="w-[30px]">
                <FiMonitor />
              </div>
              <div className="">Application</div>
            </button>
          </div>
          <div className="">
            <button
              className="border w-full text-center text-[#342B3D] flex items-center   hover:bg-[#177DFE] justify-center hover:text-[white]  p-4 "
              onClick={() => HandleUpdate()}
            >
              <div className="w-[30px]">
                <MdNotifications />
              </div>
              <div className="">Notification</div>
            </button>
          </div>
        </div>
      </div>
      <div className="border w-full p-12">
        <div className="text-[25px] text-[#342B3D] font-bold">
          Account Settings
        </div>
        <div className="flex w-full mt-2">
          <div className="mt-4 w-1/2">
            <div className="text-[17px] text-[#342B3D] font-semibold">Name</div>
            <div className="mt-2 ">
              <input
                className="rounded  "
                type="text"
                name=""
                placeholder="Name"
                id=""
                disabled
              />
            </div>
          </div>
          <div className="mt-4 w-1/2">
            <div className="text-[17px]  text-[#342B3D] font-semibold">
              Username
            </div>
            <div className="mt-2 ">
              <input
                className="rounded"
                type="text"
                name=""
                placeholder="Userame"
                id=""
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex w-full mt-2">
          <div className="mt-4 w-1/2">
            <div className="text-[17px] text-[#342B3D] font-semibold">
              Email
            </div>
            <div className="mt-2 ">
              <input
                className="rounded  "
                type="text"
                name=""
                placeholder="Name"
                id=""
                disabled
              />
            </div>
          </div>
          <div className="mt-4 w-1/2">
            <div className="text-[17px]  text-[#342B3D] font-semibold">
              Address
            </div>
            <div className="mt-2 ">
              <input
                className="rounded"
                type="text"
                name=""
                placeholder="Userame"
                id=""
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex w-full pb-4 mt-2">
          <div className="mt-4 w-1/2">
            <div className="text-[17px] text-[#342B3D] font-semibold">
              Phone{" "}
            </div>
            <div className="mt-2 ">
              <input
                className="rounded  "
                type="text"
                name=""
                placeholder="Name"
                id=""
                disabled
              />
            </div>
          </div>
          <div className="mt-4 w-1/2">
            <div className="text-[17px]  text-[#342B3D] font-semibold">Age</div>
            <div className="mt-2 ">
              <input
                className="rounded"
                type="text"
                name=""
                placeholder="Userame"
                id=""
                disabled
              />
            </div>
          </div>
        </div>

        <div className="flex mt-8 justify-center w-1/2">
          <div className="w-[100px]">
            <button
              className="p-[6px] w-full bg-[#187EFF] text-[white] rounded font-semibold"
              onClick={() => HandleUpdate()}
            >
              Update
            </button>
          </div>
          <div className="w-[100px]">
            <button className="p-2 font-semibold text-[#342B3D] w-full ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newprofile;
