import React, { useState } from 'react';
import '../CSS/contact.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ContactUs() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[contactNo, setContactNo] = useState('');
  const[message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(e);
    axios.post("http://localhost:8090/enquiry/add",{
        name : name,
        contactNo : contactNo,
        email : email,
        message : message
    }).then((response) => {
        console.log(response);
        
    }).catch((error) => {
        console.log(error);
    })
    alert("successfully submited!!");
    navigate('/');
}

  return (
    <>
      <section className='header'>
        <div className='text1'>
          <h1>Contact Us</h1>
        </div>
      </section>
      {/* location start */}
      <section className='location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.686116613479!2d74.38006501486743!3d16.742506188468106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc103227ffea19b%3A0xba598d42f62e8fc1!2sSanjay%20Ghodawat%20University!5e0!3m2!1sen!2sin!4v1684040381814!5m2!1sen!2sin" allowFullScreen=""
          loading="lazy" />
      </section>
      {/* location end */}
      {/* contact start */}
      <section className='contact'>
        <div className='container'>
          <div className="row">
            <div className="col-xl-6">
              <span>
                <p className='lable'>Address</p>
                <h5>Sanjay Ghodawat University</h5>
                <p>Gate No. 583 to 585 , A/P. Atigre, Kolhapur, Maharashtra, IN, 416118</p>
              </span>
              <span>
                <p className='lable'> Phone Number</p>
                <h5>+91 7588249523</h5>
                <p>Monday to Saturday, 10AM to 6PM</p>
              </span>
              <span>
                <p className='lable'>Email Id</p>
                <h5>contact_us@sgu.com</h5>
                <p>Connect us with email</p>
              </span>
            </div>
            <div className="col-xl-6 conForm">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Name' required name='name' onChange={(e)=>{
                  setName(e.target.value);
                }}/>
                <input type="email" placeholder='Enter Email' required name='email'
onChange={(e)=>{
                  setEmail(e.target.value);
                }}/>
                <input type="text" placeholder='Enter Contact No' required name='contactNo' onChange={(e)=>{
                  setContactNo(e.target.value);
                }}/>
                <textarea id="" rows="8" placeholder='Message' required name='message' onChange={(e)=>{
                  setMessage(e.target.value);
                }}> </textarea>
                <button className='btn btn-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
    </>
  )
}

export default ContactUs;