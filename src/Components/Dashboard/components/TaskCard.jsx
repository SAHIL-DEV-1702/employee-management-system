import React from 'react'

const TaskCard = ({ data }) => {
    return (
        <div className='flex border-2 mt-10  gap-5  screen' >

            <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
                <h1 className='text-3xl'>{data.taskSummary.newTask}</h1>
                <h2 className='text-2xl'>NEW TASK</h2>
            </div>

            <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
                <h1 className='text-3xl'>{data.taskSummary.completed}</h1>
                <h2 className='text-2xl'>COMPLETE TASK</h2>
            </div>

            <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'>
                <h1 className='text-3xl'>{data.taskSummary.failed}</h1>
                <h2 className='text-2xl'>FAILED TASK</h2>
            </div>
            <div className='rounded-xl py-6 px-9 w-[45%] bg-yellow-400'>
                <h1 className='text-3xl'>{data.taskSummary.active}</h1>
                <h2 className='text-2xl'>ACCEPTED TASK</h2>
            </div>

        </div>
    )
}

export default TaskCard