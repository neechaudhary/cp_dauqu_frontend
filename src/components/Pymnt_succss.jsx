import React from 'react'
import { Link } from 'react-router-dom'

const Pymnt_succss = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center '>
            <div>
                <div className='text-center'>Payment successfull</div>
                <button className='border-green-500 border-2 px-6 py-2 mt-2 '>
                    <Link to="/profile">Go to Profile</Link>
                </button>
            </div>

        </div>

    )
}

export default Pymnt_succss