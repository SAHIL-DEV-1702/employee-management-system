
import { useState, useEffect } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmpDashboard from './Components/Dashboard/EmpDashboard'
import { AuthContext } from './Context/AuthProvider'
import { useContext } from 'react'



function App() {


  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authData = useContext(AuthContext);
  console.log("employees", authData.Employees)
  console.log("admin", authData.Admin)

  useEffect(() => {

    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")

      if (loggedInUser) {
        setUser(loggedInUser.role)
      }

    }

  }, [authData])

  const handleLogin = ((email, password) => {

    if (email == 'admin@example.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      console.log('this is admin')
      console.log(user)
    }

    else if (authData) {

      const employee = authData.Employees.find((e) => e.email == email && e.password == password);

      if (employee) {
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }

    }
    else {
      alert('Invalid Credentials')
    }
  })
  // handleLogin('employee1@example.com', '123');

  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : user == 'employee' ? <EmpDashboard data={loggedInUser} /> : null}

      {/* <EmpDashboard />
      <AdminDashboard /> */}
    </>
  )
}

export default App
