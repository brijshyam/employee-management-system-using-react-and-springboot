import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useParams } from "react-router-dom";

const ViewEmployeeComponent = () => {
    const [currEmployee, setCurrEmployee] = useState();
    const empId = useParams();
    console.log(empId);

    useEffect(() => {
        console.log(empId);
        EmployeeService.getEmployeeById(empId).then(async (res) => {
            const data = await res.data;
            setCurrEmployee(data);
        });
    }, []);
    return (
        <div>
            <h2>View Employee Page</h2>
            <p>{currEmployee.id}</p>
        </div>
    );
};

export default ViewEmployeeComponent;
