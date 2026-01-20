import React from 'react'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import TaskLists from '../TaskList/TaskLists'

const EmpDashboard = ({ data }) => {

    return (
        <>
            <div className='bg-[#1D1C19] h-screen'>
                <Header data={data} />
                <TaskCard data={data} />
                <TaskLists data={data} />
            </div>
        </>
    )
}

export default EmpDashboard