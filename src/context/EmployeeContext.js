import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export const EmpployeeContext = createContext()
const EmpployeeContextProvider = (props) => {


  const [employees, setEmployees] = useState([
    { id: uuidv4(), name: 'Thomas Hardyyy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
    { id: uuidv4(), name: 'Mary Hardy', email: 'maryhardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
    { id: uuidv4(), name: 'Thom Hardy', email: 'thom@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' }

  ])

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
  }, [])

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  })




  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));
  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const updateEmployee = (id, updateEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updateEmployee : employee))
  }


  return (
    <EmpployeeContext.Provider value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}>
      {props.children}
    </EmpployeeContext.Provider>
  )
}
export default EmpployeeContextProvider;