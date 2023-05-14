import React from 'react';
import '../CSS/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
   <>
    <section className='header'>
        <div className='text1'>
          <h1>World's Biggest University</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur soluta excepturi quas possimus totam voluptatem quidem impedit magni id tempore sit aut fuga blanditiis fugiat obcaecati deleniti, temporibus deserunt?</p>
          <Link to='/about' className='text-btn'>Visit Us To Know More</Link>
        </div>
    </section>
    {/* Course start*/}
    <section className='course'>
      <h1>Courses We Offer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum dolor modi reiciendis perspiciatis.</p>
       <div className="row">
        <div className="course-col">
          <h3>Diploma</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint aliquam saepe incidunt consequatur? Accusantium deleniti corporis assumenda, exercitationem quo explicabo quibusdam blanditiis molestias aspernatur molestiae enim. Dolores, blanditiis quaerat?</p>
        </div>
        <div className="course-col">
          <h3>Graduation</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint aliquam saepe incidunt consequatur? Accusantium deleniti corporis assumenda, exercitationem quo explicabo quibusdam blanditiis molestias aspernatur molestiae enim. Dolores, blanditiis quaerat?</p>
        </div>
        <div className="course-col">
          <h3>Post Graduation</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint aliquam saepe incidunt consequatur? Accusantium deleniti corporis assumenda, exercitationem quo explicabo quibusdam blanditiis molestias aspernatur molestiae enim. Dolores, blanditiis quaerat?</p>
        </div>
       </div>
    </section>
    {/* Course end*/}
    {/* Campus start*/}
    <section className='campus'>
      <h1>Our Campus</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum dolor modi reiciendis perspiciatis.</p>
      <div className="row">
        <div className="campus-col">
        <img src="images/campus3.jpg" alt="campus1" />
        </div>
        <div className="campus-col">
        <img src="images/campus2.jpg" alt="campus2" />
        </div>
        <div className="campus-col">
        <img src="images/campus1.jpg" alt="campus3" />
        </div>
      </div>
    </section>
    {/* Campus end*/}
    {/* Facility start*/}
    <section className='fac'>
      <h1>Our Facilities</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum dolor modi reiciendis perspiciatis.</p>
      <div className="row">
        <div className="fac-col">
          <img src="images/library.png" alt="library" />
          <h3>World Class Library</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum dolor modi reiciendis perspiciatis.</p>
        </div>
        <div className="fac-col">
          <img src="images/ComputerLab.jpg" alt="library" />
          <h3>Modern Lab</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum dolor modi reiciendis perspiciatis.</p>
        </div>
        <div className="fac-col">
          <img src="images/foodcourt.jpg" alt="library" />
          <h3>Tasty and Healthy Food</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum dolor modi reiciendis perspiciatis.</p>
        </div>
      </div>
    </section>
    {/* Facility end*/}
    {/* call start*/}
    <section className='call'>
      <h1>Enroll Our Various Courses</h1>
      <Link to='/contactus' className='text-btn'>Contact Us</Link>
    </section>
    {/* call end*/}
   </>
  )
}

export default Home;