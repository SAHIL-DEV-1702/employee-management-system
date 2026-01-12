import React from 'react'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import TaskLists from '../TaskList/TaskLists'

const EmpDashboard = () => {
    return (
        <>
            <div className='bg-[#1D1C19] h-screen'>
                <Header />

                <TaskCard />
                <TaskLists />
            </div>
        </>
    )
}

export default EmpDashboard