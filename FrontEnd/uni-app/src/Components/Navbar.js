import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../CSS/navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const logout=()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
        <nav>
            <Link to=''><img src="images/aboutlogo.jpg" alt="logo" /></Link>
            <h2 className='navh4'>Sanjay Ghodawat University</h2>
            <div className='nav-links'>
                <ul>
                    <li><Link to='/about' className='menu'>ABOUT</Link></li>
                    <li><Link to='/courses' className='menu'>COURSE</Link></li>
                    <li><Link to='/contactus' className='menu'>CONTACT US</Link></li>
                    {
                      auth?<li><Link onClick={logout} to='/' className='menu'>LOGOUT</Link></li>
                      :<>
                        <li><Link to='login' className='menu'>LOGIN</Link></li>
                        <li><Link to='/signup' className='menu'>SIGNUP</Link></li>
                      </>
                    }
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;