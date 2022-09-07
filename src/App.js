import './App.css';
import Counter from './components/counter';
import Navbar from './components/navbar';
import Aboutus from './components/aboutUs';
import Shop from './components/shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { Link } from "react-router-dom";
import SignUp from './components/SginUp';
// import SignIn from './components/SignIn'
// import Card from 'react-bootstrap/Card';

function App() {
  return (
    
     
    <Router>
   <Navbar/>
   <Routes>
   <Route path="/shop" element={<Shop/>}/>
   <Route path="/aboutUs" element={<Aboutus/>}/>
   <Route path="/signUp" element={<SignUp/>}/>
   {/* <Route path="/SignIn" element={<SignIn/>}/> */}
   <Route path="/counter" element={<Counter/>}/>
   </Routes>
   </Router>
    );
}

export default App;
