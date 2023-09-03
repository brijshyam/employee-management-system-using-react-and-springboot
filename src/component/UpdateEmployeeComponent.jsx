import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent() {
    const [currEmployee, setCurrEmployee] = useState();
    const [updatedEmpData, setUpdatedEmpData] = useState();
    const { id } = useParams();
    const navigateTo = useNavigate();
    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(async (res) => {
            const data = await res.data;
            setCurrEmployee(data);
            setUpdatedEmpData(data);
        });
    });

    const updateHandler = () => {};
    return (
        <div className="">
            <div className="row mt-5">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Update Employee</h2>
                    <br />
                    {currEmployee && (
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label className="form-label">
                                        First Name:
                                    </label>
                                    <input
                                        placeholder="Enter First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={currEmployee.firstName}
                                        onChange={(e) =>
                                            setUpdatedEmpData((prev) => {
                                                // console.log(prev);
                                                const { firstName } =
                                                    e.target.value;
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Last Name:
                                    </label>
                                    <input
                                        placeholder="Enter Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={currEmployee.lastName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Email Id:
                                    </label>
                                    <input
                                        placeholder="Enter email"
                                        name="emailId"
                                        className="form-control"
                                        value={currEmployee.emailId}
                                    />
                                </div>
                                <br />
                                <div className="col-12">
                                    <button
                                        className="btn btn-success"
                                        onClick={updateHandler}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => navigateTo("/")}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;
