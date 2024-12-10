import React from 'react'

export const Footer = () => {
  return (
    <div className='foot-body conatiner-fluid'>
        <div className='container'>
        <div className="row p-4 mx-5">
          <div className="col-lg-3 p-lg-2 mt-3">
            <h4 className='mb-2'>Nschool Academy</h4>
            <div>
                <h4 style={{color:"#f17424"}}>Coimbatore</h4>
            <p style={{fontSize:'14px'}}>Fastkart is the biggest market of grocery products. 
              Get your daily needs from our store.</p>
              </div>
              <div>
                <h4 style={{color:"#f17424"}}>Gobichettipalayam</h4>
            <p style={{fontSize:'14px'}}>Fastkart is the biggest market of grocery products. 
              Get your daily needs from our store.</p>
              </div>
            </div>
            <div className="col-lg-3 px-lg-5 mt-3">
            <h4>Company</h4>
            <ul className='list-inline'>
              <li className='p-1'>About Us</li>
              <li className='p-1'>Course Offered</li>
              <li className='p-1'>Testimonial</li>
              <li className='p-1'>Gallery</li>
              <li className='p-1'>Blog</li>
            </ul>
          </div>
          <div className="col-lg-3 px-lg-5 mt-3">
            <h4>Courses</h4>
            <ul className='list-inline'>
              <li className='p-1'>About Us</li>
              <li className='p-1'>Course Offered</li>
              <li className='p-1'>Testimonial</li>
              <li className='p-1'>Gallery</li>
              <li className='p-1'>Blog</li>
            </ul>
          </div>
          <div className="col-lg-3 px-lg-5 mt-3">
            <h4>Contact Us</h4>
            <ul className='list-inline'>
              <li className='p-1'>About Us</li>
              <li className='p-1'>Course Offered</li>
              <li className='p-1'>Testimonial</li>
              <li className='p-1'>Gallery</li>
              <li className='p-1'>Blog</li>
            </ul>
          </div>
            </div>
            </div>

            <hr className='hr-line'></hr>
            <nav class="navbar navbar-expand-lg ">
            <div class="container nav-con my-3">
                <ul className='foot-head col-1'>
                    <li style={{color:"#f17424",paddingTop:"3px",fontSize:"20px",fontWeight:"bolder"}}>Nschool</li>
                    <li><span style={{fontWeight:"smaller"}}>Academy</span></li>
                </ul>
                <p className="me-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit, repellendus, tempore iste earum cumque placeat sequi dolores quisquam doloribus dolor dicta minus nobis odio velit. Itaque et molestiae incidunt.</p>
            </div>
        </nav>

       <div className='foot-con container d-flex justify-content-between'>
       <ul class="list-inline pe-4 pt-2 fot-con">
                <li class="list-inline-item p-2">Features</li>
                <li class="list-inline-item p-2">Pricing</li>
                <li class="list-inline-item p-2">FAQs</li>
            </ul>
            <ul className='list-inline d-flex align-items-center'>
                <li>All Rights Reserved Nschool 2023</li>
            </ul>
            </div>
    </div>
  )
}
