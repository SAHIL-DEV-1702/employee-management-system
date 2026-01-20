import React from 'react'

const CompletedTask = () => {
    return (
        <>
            <div className='shrink-0 p-5 bg-green-400 h-full w-90 rounded-md'>

                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white '>High</h3>

                    <h4 className='text-white text-sm'>20 feb 2026</h4>
                </div>
                <h2 className='mt-5 text-white text-2xl font-semibold '>MAKE A YOUTUBE VIDEO</h2>

                <p className='text-sm text-white mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste praesentium mollitia minus explicabo id eum incidunt distinctio repellat quisquam!</p>
                <div className='mt-2'>
                    <button className='w-full bg-green-300 border-2 rounded-lg'>Completed</button>
                </div>
            </div>
        </>
    )
}

export default CompletedTask