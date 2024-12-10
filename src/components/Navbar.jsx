import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const Navbar = () => {
  return (
    <div className='container'><hr className='m-0'></hr>
        <nav class="navbar navbar-expand-lg ">
            <div class="container nav-con">
                <ul className='nav-head'>
                    <li style={{color:"#f17424",paddingTop:"3px",fontSize:"20px",fontWeight:"bolder"}}>Nschool</li>
                    <li><span style={{fontWeight:"smaller"}}>Academy</span></li>
                </ul>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbartext"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="Navbartext">
                    <ul class="navbar-nav ms-auto my-0">
                        <li class="nav-item"><a  class="nav-link active" href="" style={{color:"#f17424"}}>Home</a></li>
                        <li class="nav-item"><a  class="nav-link" href="">Course</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Careers</a></li>
                        <li class="nav-item"><a  class="nav-link" href="">Blog</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}