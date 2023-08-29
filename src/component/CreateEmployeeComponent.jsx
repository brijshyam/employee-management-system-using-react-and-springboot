import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
        };
        console.log("employee=>" + JSON.stringify(employee));
        console.log(employee);
        EmployeeService.createEmployee(employee).then((res) => {
            window.alert("Entry Passed Successfully");
        });
    };
    cancel() {
        this.setState({
            navigate: true,
        });
    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    };
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    };
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    };
    render() {
        //router-dom-v6
        const { navigate } = this.state;
        if (navigate) {
            return <Navigate to="/employees" push={true} />;
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <span className="text-center">
                                <h2>Add Employee</h2>
                            </span>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label className="form-label">
                                            First Name:{" "}
                                        </label>
                                        <input
                                            placeholder="Enter Your First Name"
                                            name="firstName"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={
                                                this.changeFirstNameHandler
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            Last Name:{" "}
                                        </label>
                                        <input
                                            placeholder="Enter Your Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={
                                                this.changeLastNameHandler
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            Email Id:{" "}
                                        </label>
                                        <input
                                            placeholder="Enter Your email"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.emailId}
                                            onChange={this.changeEmailHandler}
                                        />
                                    </div>
                                    <br />
                                    <div className="col-12">
                                        <button
                                            className="btn btn-success"
                                            onClick={this.saveEmployee}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={this.cancel.bind(this)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;
