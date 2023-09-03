import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const ViewEmployeeComponent = () => {
    const [currEmployee, setCurrEmployee] = useState();
    const navigateTo = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(async (res) => {
            const data = await res.data;
            setCurrEmployee(data);
        });
    }, []);
    return (
        <div className="card-back">
            {currEmployee && (
                <div className="card">
                    <h2 className="card-header">Employee Complete Details</h2>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label">Emp ID: </label>
                            <p>{currEmployee.id}</p>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Emp Name: </label>
                            <p>{`${currEmployee.firstName} ${currEmployee.lastName}`}</p>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Id: </label>
                            <p>{currEmployee.emailId}</p>
                        </div>
                        <br />
                        <div className="col-12">
                            <button
                                className="btn btn-danger"
                                onClick={() => navigateTo("/")}
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewEmployeeComponent;
