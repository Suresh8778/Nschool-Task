import React from 'react';
import Banner2 from './img/Online Doctor-pana.png';
import course2 from './img/course2.png';

export const Content2 = () => {
  return (
    <div className='container'>
        <div className="row  mt-3">
        <div className="col-lg-6">
            <img src={Banner2} width={400} className='img-ban'></img>
        </div>
        <div className="col-lg-6">
            <p className='display-5 p-1 my-3'>Why <br></br><span style={{color:"#f17424",fontWeight:"bold"}}>Nschool Academy?</span> </p>
            <p className='py-2 px-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet iusto voluptatum illum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet iusto voluptatum illum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolores eius velit sed culpa, quaerat iure commodi. Praesentium dolore eaque sunt cum vero incidunt impedit officiis vel perferendis amet nemo possimus deleniti eligendi, aliquid qui earum fuga velit recusandae cupiditate rem deserunt odit excepturi eveniet ad? Provident in quaerat ea!</p>
        </div>
        </div>
        <div className="row justify-content-center g-4 mx-5 mt-3">
        {/* Card 1 */}
        <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="col-2">
                  <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                </div>
                <div className="col-10 text-start">
                  <h5 className="mb-1">Expertise of instructors</h5>
                  <p className="course-con small mb-2 ms-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/*  */}
        <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="col-2">
                  <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                </div>
                <div className="col-10 text-start">
                  <h5 className="mb-1">Python Development</h5>
                  <p className="course-con small mb-2 ms-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit .consectetur adipisicing elit.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* 3 */}
        <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="col-2">
                  <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                </div>
                <div className="col-10 text-start">
                  <h5 className="mb-1">Python Development</h5>
                  <p className="small mb-2 ms-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit..consectetur adipisicing elit.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* 4 */}
        <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="col-2">
                  <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                </div>
                <div className="col-10 text-start">
                  <h5 className="mb-1">Python Development</h5>
                  <p className="small mb-2 ms-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit..consectetur adipisicing elit.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* 5 */}
        <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="col-2">
                  <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                </div>
                <div className="col-10 text-start">
                  <h5 className="mb-1">Python Development</h5>
                  <p className="small mb-2 ms-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit..consectetur adipisicing elit.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* 6 */}
        <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="col-2">
                  <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                </div>
                <div className="col-10 text-start">
                  <h5 className="mb-1">Python Development</h5>
                  <p className="small mb-2 ms-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit..consectetur adipisicing elit.
                  </p>
                </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}
