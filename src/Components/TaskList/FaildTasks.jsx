import React from 'react'

const FaildTasks = ({ data }) => {
    return (
        <>
            <div className='shrink-0 p-5 bg-blue-400 h-full w-90 rounded-md'>

                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white '>{data.category}</h3>

                    <h4 className='text-white text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-white text-2xl font-semibold '>{data.taskTitle}</h2>

                <p className='text-sm text-white mt-2'>{data.taskDescription}</p>
                <div className='mt-2'>
                    <button className='w-full border-2 bg-blue-300 rounded-lg'>Failed</button>
                </div>
            </div>
        </>
    )
}

export default FaildTasks