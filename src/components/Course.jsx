import React from 'react';
import course1 from './img/course1.png';
import course2 from './img/course2.png';
import course3 from './img/course3.png';
import course4 from './img/course4.png';

export default function Course() {
  return (
    <div className='container-fluid course-flu p-4 mt-3'>
      <div className="container text-center my-5">
        <h4 className="display-6 mb-2">
          Course <span style={{ color: "#f17424" }}>Offered</span>
        </h4>
        <p className="px-5 py-2">
          NSCHOOL Academy provides live online training that is designed to focus on individual participant results, engaging virtual activities, and personalized experiences. NSCHOOL Academy online learning can help you get the job, the raise, or the promotion in a wide range of careers.
        </p>
        <div className="row justify-content-center g-5 mx-lg-5">
          {/* Card 1 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="card mx-auto flex-grow-1" style={{ height: "100%" }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <img src={course1} className="course-logo img-fluid" alt="Course Logo" />
                  </div>
                  <div className="col-8 text-start p-lg-3">
                    <h5 className="mb-1">Python Development</h5>
                    <p className="course-con small mb-2">
                      Learn Python programming and its applications in web development with Django.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">HTML</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">CSS</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">JavaScript</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Django</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">MongoDB</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">python</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="card mx-auto flex-grow-1" style={{ height: "100%" }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <img src={course2} className="course-logo img-fluid" alt="Course Logo" />
                  </div>
                  <div className="col-8 text-start p-lg-3">
                    <h5 className="mb-1">Full Stack Development</h5>
                    <p className="course-con small mb-2">
                      Master the MERN stack (MongoDB, Express, React, Node.js) to build dynamic web applications.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">HTML</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">React</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Node.js</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">MongoDB</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Expressjs</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Css</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Projects</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="card mx-auto flex-grow-1" style={{ height: "100%" }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <img src={course3} className="course-logo img-fluid" alt="Course Logo" />
                  </div>
                  <div className="col-8 text-start p-lg-3">
                    <h5 className="mb-1">Flutter Development</h5>
                    <p className="course-con small mb-2">
                      Learn to develop cross-platform mobile apps using Flutter and Dart.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Dart</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Firebase</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">API Integration</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Widgets</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Live Projects</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 d-flex">
            <div className="card mx-auto flex-grow-1" style={{ height: "100%" }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <img src={course4} className="course-logo img-fluid" alt="Course Logo" />
                  </div>
                  <div className="col-8 text-start p-lg-3">
                    <h5 className="mb-1">Digital Marketing</h5>
                    <p className="course-con small mb-2">
                      Explore SEO, Google Ads, and social media marketing to enhance brand visibility.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">SEO</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">SMM</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Email Marketing</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">SMO</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">PPC Ads</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Google Ads</button>
                      <button type="button" className="btn btn-outline-primary btn-sm text-dark">Projects</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
