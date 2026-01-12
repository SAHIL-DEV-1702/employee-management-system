import React from 'react'

const Header = () => {
    return (
        <div className=' flex items-center justify-between p-10 '>

            <h1 className='text-2xl text-white' >hello <br /> <span className='text-3xl font-semibold'>Sahil 👋</span> </h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded-md'>LogOut</button>
        </div>
    )
}

export default Header