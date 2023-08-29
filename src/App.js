// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path="/create-employee" element={<CreateEmployeeComponent />}></Route>
            <Route path='/view-employee:id' element={<ViewEmployeeComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
