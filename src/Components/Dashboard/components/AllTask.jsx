import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'

const AllTask = () => {

    const authdata = useContext(AuthContext)
    console.log("employees ", authdata.Employees);
    return (
        <>
            <div className='bg-[#242222] p-5 mt-5 rounded text-white '>

                <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between rounded'>
                    <h2 className='w-1/5 text-xl font-medium'>EMPLOYEE NAME</h2>
                    <h3 className='w-1/5 text-xl font-medium'>NEW TASK</h3>
                    <h5 className='w-1/5 text-xl font-medium'>ACTIVE TASK</h5>
                    <h5 className='w-1/5 text-xl font-medium'>COMPLETE TASK</h5>
                    <h5 className='w-1/5 text-xl font-medium'>FAILED TASK</h5>

                </div>

                <div className='h-[80%]  text-white'>
                    {

                        authdata.Employees.map((e, idx) => {
                            return <div key={idx} className='border-2 border-emerald-400 mb-2  py-2 px-4 flex justify-between rounded'>
                                <h2 className='w-1/5 text-xl font-medium  text-white'>{e.employeeName}</h2>
                                <h3 className='w-1/5 text-xl font-medium text-yellow-400'>{e.taskSummary.newTask}</h3>
                                <h5 className='w-1/5 text-xl font-medium text-blue-600'>{e.taskSummary.active}</h5>
                                <h5 className='w-1/5 text-xl font-medium text-white'>{e.taskSummary.completed}</h5>
                                <h5 className='w-1/5 text-xl font-medium text-red-600'>{e.taskSummary.failed}</h5>
                            </div>
                        }
                        )
                    }
                </div>

            </div>

        </>
    )
}

export default AllTask