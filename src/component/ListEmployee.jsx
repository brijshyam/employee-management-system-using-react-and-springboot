import React, { Component, } from 'react';
import { Navigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';



class ListEmployeeComponent extends Component {
    // function redirect() {
        
        // EmployeeService.getEmployees().then((res)=>{
        //     setEmployeeData(res);
        // });
    // }
    constructor(props) {
        super(props)
        this.state={
            employees :[] 
        }
        //this event handler method should be binded inside a constructor 
        this.addEmployee= this.addEmployee.bind(this);
        this.deleteEmployee= this.deleteEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    deleteEmployee=(id)=>{
        //rest api call 
        EmployeeService.deleteEmployee(id).then(res=>{
            setEmployeeData({employees: this.employees.filter(employee=>employee.id!==id)})
        });
    }

    
   
    /* 
    1.conditionally route to the specific page on button click 
        1.a. send route as param 
        1.b. need to add a state variable 
        1.c. state variable will be changing on every click 
        1.d. 
     */
    render() {
        //router-dom-v6
        const{navigate} = this.state;
        if(navigate ){
            return <Navigate to = "/add-employee" push ={true } />
        }
        
    }
}

export default ListEmployeeComponent;