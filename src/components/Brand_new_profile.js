import React, { useState, useEffect } from 'react'
import SecondHeader from './SecondHeader'

//icons
import { CgProfile } from 'react-icons/cg'
import { BiBuildings, BiCodeCurly } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineSecurity } from 'react-icons/md'
import { RiMoneyDollarCircleLine, RiSecurePaymentLine } from 'react-icons/ri'
import { AiOutlineHome } from "react-icons/ai"
import { IoIosPersonAdd } from "react-icons/io"


import Profile_information from './Profile_information'
import { Link } from 'react-router-dom'
import Github_information from './Github_information'

import { API } from "./Constant";
import axios from 'axios'
import trustimg from "../assets/images/trust.png"


const Brand_new_profile = ({ children }) => {
    const [active, setActive] = React.useState(1)
    const [activePage, setActivePage] = useState()

    const changeActivePage = () => {
        setActivePage()
    }


    const [dataTabs, setDataTabs] = useState([
        {
            id: 1,
            tabTitle: "Profile",
            tabIcon: <CgProfile size={20} />,
            tabClass: "myCustomClass",
            tabClicked: false,
            href: "/personal-details"
        },
        {
            id: 2,
            tabTitle: "Github",
            tabIcon: <FiGithub size={20} />,
            tabClass: "myCustomClass",
            tabClicked: false,
            href: "/github-details"

        },
        {
            id: 3,
            tabTitle: "Subscriptions",
            tabIcon: <RiMoneyDollarCircleLine size={20} />,
            tabClass: "myCustomClass",
            tabClicked: false
        },
        {
            id: 4,
            tabTitle: "Domains",
            tabIcon: <BiCodeCurly size={20} />,
            tabClass: "myCustomClass",
            tabClicked: false
        },
        {
            id: 5,
            tabTitle: "Payments",
            tabIcon: <RiSecurePaymentLine size={20} />,
            tabClass: "myCustomClass",
            tabClicked: false
        },
        {
            id: 6,
            tabTitle: "Security",
            tabIcon: <MdOutlineSecurity size={20} />,
            tabClass: "myCustomClass",
            tabClicked: false
        }
    ]);

    const NavLink = ({ id, tabTitle, isActive, tabIcon, onClick, href }) => {
        return (
            <div></div>

            // <div className={isActive ? "active" : ""} onClick={() => { navigate(id) }} >
            //     <div className='flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold' >
            //         <div className='mr-[10px]'>{tabIcon}</div>
            //         <div className='text-[18px] '>{tabTitle}</div>
            //     </div>
            // </div>

        );
    };

    const navigate = (id) => {
        setActive(id);
    };

    // ===========for personal information page  start 
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
    // ==============for personal information page end 





    return (
        <div>
            <SecondHeader />
            <div className='w-full md:flex'>

                <div className='w-[250px]'>
                    <div className='w-[250px] overflow-x:-hidden bg-[#fff] mt-16 border h-[100vh] fixed'>
                        <div className='w-full px-[24px] flex items-center'>
                            <h1 className='text-[21px] min-h-[48px] text-transparent font-semibold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center'>123 Auc admin panel</h1>
                        </div>
                        <hr className='border' />
                        <div className='py-[10px] '>
                            <ul className='w-full '>
                                {/* {active ? (
                            <div className='flex justify-start items-center my-[10px] h-[35px] px-[15px] hover:shadow-md bg-[#00A19E]'  >
                                <div className='mr-[10px]'><GiTorch size={20} /></div>
                                <div className='text-[18px] '>Ads management</div>
                            </div>
                            ) : 
                            (
                            <div className='flex justify-start items-center my-[10px] h-[35px] px-[15px] ' onClick={handleSetActive}>
                                <div className='mr-[10px]'><GiTorch size={20} /></div>
                                <div className='text-[18px] '>Ads management</div>
                            </div>
                            )
                        } */}


                                <li onClick={() => setActive(1)}>
                                    <div className={active === 1 ? "flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold bg-[#165461] text-white" : 'flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold'}>
                                        <div className='mr-[10px]'><CgProfile size={20} /></div>
                                        <div className='text-[18px] '>Profile</div>
                                    </div>
                                </li>

                                <li onClick={() => setActive(2)}>
                                    <div className={active === 2 ? "flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold  bg-[#165461] text-white" : 'flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold'}>
                                        <div className='mr-[10px]'><FiGithub size={20} /></div>
                                        <div className='text-[18px] '>Github</div>
                                    </div>
                                </li>

                                <li onClick={() => setActive(3)}>
                                    <div className={active === 3 ? "flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold  bg-[#165461] text-white" : 'flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold'}>
                                        <div className='mr-[10px]'><RiMoneyDollarCircleLine size={20} /></div>
                                        <div className='text-[18px] '>Subscriptions</div>
                                    </div>
                                </li>

                                <li onClick={() => setActive(4)}>
                                    <div className={active === 4 ? "flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold  bg-[#165461] text-white" : 'flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold'}>
                                        <div className='mr-[10px]'><BiCodeCurly size={20} /></div>
                                        <div className='text-[18px] '>Domains</div>
                                    </div>
                                </li>

                                <li onClick={() => setActive(5)}>
                                    <div className={active === 5 ? "flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold  bg-[#165461] text-white" : 'flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold'}>
                                        <div className='mr-[10px]'><RiSecurePaymentLine size={20} /></div>
                                        <div className='text-[18px] '>Payments</div>
                                    </div>
                                </li>

                                <li onClick={() => setActive(6)}>
                                    <div className={active === 6 ? "flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold  bg-[#165461] text-white" : 'flex justify-start items-center my-[10px] h-[35px] px-[15px] cursor-pointer font-semibold'}>
                                        <div className='mr-[10px]'><MdOutlineSecurity size={20} /></div>
                                        <div className='text-[18px] '>Security</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className={active === 1 ? 'grow shrink pt-16' : "hidden"}>
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


                <div className={active === 2 ? 'grow shrink pt-16' : "hidden"}>
                    {/* =========github information starts here========= */}
                    <div className='flex justify-center items-center w-full h-[100vh] bg-red-500'>
                        Github_information
                    </div>
                    {/* =========github information end here========= */}
                </div>

                <div className={active == 3 ? 'grow shrink pt-16' : "hidden"}>
                    <section className='p-6 sm:p-10 w-full '>
                        <div>
                            <div className='flex'>
                                <div className='bg-[#28C270] w-[50px] h-[50px] flex rounded-md justify-center items-center '>
                                    <AiOutlineHome className='text-white text-2xl' />
                                </div>
                                <div className='ml-[20px]'>
                                    <h1 className='text-xl font-semibold '>Taxi Ride</h1>
                                    <p className='font-semibold'>Summary</p>
                                </div>

                            </div>
                            <div className='flex flex-wrap justify-between md:justify-around lg:justify-between mt-4'>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                    <div className=''>
                                        <p>Approved drivers</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                    <div className=''>
                                        <p>Active drivers</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                    <div className=''>
                                        <p>Unapproved drivers</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border'>
                                    <div className=''>
                                        <p>Earnings</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>

                            </div>
                            <div className='mt-4 p-4'>
                                <div className='font-semibold'>Last 7-Days Taxi Ride Statics</div>
                            </div>
                            <div className='flex flex-wrap justify-between md:justify-around lg:justify-between mt-3'>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                    <div className=''>
                                        <p>Total Rides</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>
                                <div className='flex  justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                    <div className=''>
                                        <p>Completed Rides</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                    <div className=''>
                                        <p>Running Rides</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>
                                <div className='flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border'>
                                    <div className=''>
                                        <p>Cancelled Rides</p>
                                        <h1 className='text-lg font-bold'>256</h1>
                                    </div>
                                    <div className='shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] '>
                                        <IoIosPersonAdd size={30} className="text-[#28C270]" />
                                    </div>
                                </div>

                            </ div>

                            <div className='flex flex-wrap justify-between mt-5'>
                                <div className='p-4 w-full md:w-[47%] border shadow-md'>
                                    <div className='text-xl font-semibold border-b-2'>Ride status</div>
                                    <div>


                                    </div>
                                </div>
                                <div className='p-4 w-full md:w-[47%] border mt-4 md:mt-0 shadow-md'>
                                    <div className='text-xl font-semibold border-b-2'>Driver statistics</div>
                                    <div >

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={active == 4 ? 'grow shrink pt-16' : "hidden"}>
                <section className='p-8 sm:p-10 w-full'>
                    <div className='w-full'>
                        <div className='flex '>
                            <div className='bg-[#28C270] w-[50px] h-[50px] flex rounded-md justify-center items-center '>
                                <AiOutlineHome className='text-white text-2xl' />
                            </div>
                            <div className='ml-[20px]'>
                                <h1 className='text-xl font-semibold '>Manual ride booking</h1>
                                <p className='font-semibold'>Manual ride booking of taxi ride</p>
                            </div>
                        </div>
                        <div className=' shadow-md border mt-4 p-4'>
                            <div className='text-xl font-bold tracking-wider'>Customer details</div>
                            <div className='flex flex-wrap justify-between'>
                                <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                    <label for="Contact number" className='text-xl font-semibold py-2'>Contact number</label>
                                    <input type="text" placeholder="Contact number" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                </div>
                                <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                    <label for="customer name" className='text-xl font-semibold py-2'>customer name</label>
                                    <input type="text" placeholder="customer name" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                </div>
                                <div className='sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full'>
                                    <label for="customer email" className='text-xl font-semibold py-2'>customer email</label>
                                    <input type="text" placeholder="customer email" className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10" />
                                </div>
                            </div>
                        </div>

                        <div className='shadow-md border mt-4'>
                            <div className='text-xl font-bold tracking-wider p-4'>Ride details of taxi ride</div>
                            <div className='md:flex w-full'>
                                <div className='w-full md:w-1/2 py-2'>
                                    <div className='sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full'>
                                        <label for="Pickup Address" className='text-xl font-semibold py-2'>Pickup Address</label>
                                        <input type="text" placeholder=" Enter Pickup Address" className="p-2 input input-bordered rounded-none outline-none input-info w-full h-10" />
                                    </div>
                                    <div className='sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full'>
                                        <label for="Destination Address" className='text-xl font-semibold py-2'>Destination Address</label>
                                        <input type="text" placeholder=" Enter Destination Address" className="p-2 input input-bordered rounded-none outline-none input-info w-full h-10" />
                                    </div>
                                    <div className='sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full'>
                                        <label htmlFor="pickup date" className='text-xl font-semibold py-2'>Pickup date</label>
                                        <input type="date"   className='p-2 input input-bordered rounded-none outline-none input-info w-full  h-10'/>
                                    </div>
                                    <div className='sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full '>
                                        <label htmlFor="pickup date" className='text-xl font-semibold py-2'>Pickup date</label>
                                        <input type="time"  className='p-2 input input-bordered rounded-none outline-none input-info w-full  h-10'/>
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 mt-4 -z-10 relative min-h-[400px]'>
                                        
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                </div>

                {/* <div className='w-[calc(100vw-250px)] pt-16'>
                                <>{children}</> 
                </div> */}
            </div>
        </div>
    )
}

export default Brand_new_profile