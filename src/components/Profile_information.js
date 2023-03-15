import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { API } from "./Constant";

import trustimg from "../assets/images/trust.png"
import Brand_new_profile from './Brand_new_profile';



const Profile_information = () => {

  const [user, setUser] = useState("");


    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");

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
  return (
    <div>
        
        
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
                    <input type="text" value={user.phone} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly />
                  </div>
                </div>
              </div>

              <div className='md:flex lg:flex'>
                <div className='mt-4 w-full px-4'>
                  <div className='font-semibold'>
                    Country
                  </div>
                  <div>
                    <input type="text" value={user.country} className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly />
                  </div>
                </div>
                <div className='mt-4 w-full px-4'>
                  <div className='font-semibold'>
                    Address
                  </div>
                  <div>
                    <input type="text" value={user.address} className="input input-bordered w-full border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]" readOnly />
                  </div>
                </div>
              </div>

              <div>
                {/* <SubscibedPlan /> */}
              </div>


            </div>
            {/* =============profile information end============ */}
        
    </div>
  )
}

export default Profile_information