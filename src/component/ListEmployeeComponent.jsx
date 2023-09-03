import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export default function ListEmployeeComponent() {
    const navigateTo = useNavigate();
    const [employeeData, setEmployeeData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/employees`).then(async (res) => {
            const data = await res.json();
            setEmployeeData(data);
        });
    }, []);

    const deleteEmployee = (id) => {
        //rest api call
        EmployeeService.deleteEmployee(id).then((res) => {
            setEmployeeData({
                employees: this.employees.filter(
                    (employee) => employee.id !== id
                ),
            });
        });
    };

    return (
        <div>
            <h2 className="text-center">List Of Employee </h2>
            <div className="col-12">
                <button
                    className="btn btn-primary btn-sm "
                    onClick={() => navigateTo("/create-employee")}
                >
                    Add Employee
                </button>
                <br />
            </div>
            <div className="row">
                <table className="table table-striped table-bordered ">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee) => (
                            <tr key={employee.id}>
                                <td> {employee.firstName}</td>
                                <td> {employee.lastName}</td>
                                <td> {employee.emialId}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            navigateTo(
                                                `/update-employee/:${employee.id}`
                                            )
                                        }
                                        className="btn btn-info btn-sm"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            deleteEmployee(employee.id)
                                        }
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() =>
                                            navigateTo(
                                                `/view-employee/:${employee.id}`
                                            )
                                        }
                                        className="btn btn-info btn-sm"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
