import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Signin from "./Components/Signin";
import About from "./Components/About";
import Courses from "./Components/Courses";
import PrivateComponent from "./Components/PrivateComponent";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route element={<PrivateComponent />}>
          <Route path='/about' element={<About />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
        </Route>
        <Route path='/signup' element={<Signin />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
