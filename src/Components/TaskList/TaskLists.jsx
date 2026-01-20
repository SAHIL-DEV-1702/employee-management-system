import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FaildTasks from './FaildTasks'
import CompletedTask from './CompletedTask'

const TaskLists = ({ data }) => {
    return (
        <div id='TaskList' className='flex flex-nowrap items-center gap-5  mt-10 py-5 h-[55%] overflow-scroll'>

            <AcceptTask />

            <NewTask />

            <FaildTasks />

            <CompletedTask />



        </div>


    )
}

export default TaskLists