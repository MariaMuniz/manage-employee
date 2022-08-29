import React from 'react';
import EmployeeList from '../../../components/EmployeeList';
import EmpployeeContextProvider from '../../../context/EmployeeContext';


export const Employees = () => {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmpployeeContextProvider>
            <EmployeeList />
          </EmpployeeContextProvider>
        </div>
      </div>
    </div>


  );
}
