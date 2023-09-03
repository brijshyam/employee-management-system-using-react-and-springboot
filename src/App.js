// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/create-employee" element={<CreateEmployeeComponent />} />
            <Route path='/view-employee/:id' element={<ViewEmployeeComponent />} />
            <Route path='/update-employee/:id' element={<UpdateEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
