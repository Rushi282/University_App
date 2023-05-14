import React, { useState, useEffect } from 'react';
import '../CSS/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post("http://localhost:8090/user/login",{
            email : email,
            pass : pass
        }).then((response) => {
            console.log(response);
            if(response.data.firstName){
                localStorage.setItem('user',response.data);
                alert("successfully logged in!!");
                navigate('/');
                }else{
                 alert("Please enter correct details");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    })
    
    return (
        <>
            <div className="container fbox">
                <div className="row lrow">
                    <h3 className='lhead'>Log In</h3>
                    <div class="col-xl-12">
                        <form onSubmit={handleSubmit}>
                            <input type="email" class="form-control" placeholder="Email" aria-label="First name" required name='email' onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <br />
                            <input type="password" class="form-control" placeholder="Password" aria-label="First name" required name='pass' onChange={(e) => {
                                setPass(e.target.value);
                            }} />
                            <br />
                            <button type='submit' className='btn btn-primary '>LogIn</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;