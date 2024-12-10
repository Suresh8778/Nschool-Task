import React from 'react';

export default function Offer() {
  return (
    <div className="container-fluid text-center offer-con py-4">
      <div className="container">
        <h4 className="display-6 my-2">
          Course <span style={{ color: "#f17424" }}>Offered</span>
        </h4>
        <p className="px-5 py-2">
          NSCHOOL Academy provides live online training that is designed to focus on individual participant results, engaging virtual activities, and personalized experiences. NSCHOOL Academy online learning can help you get the job, the raise, or the promotion in a wide range of careers.
        </p>
      </div>
      {/* Cards row */}
      <div className="container">
        <div className="row justify-content-center g-3">
          <div className="col-md-2 col-sm-4">
            <div className="card text-center" style={{ width: "9em", height: "11em" }}>
              <div className="card-title p-2">
                <p className="fs-1" style={{ color: "#f17424" }}>10+</p>
              </div>
              <div className="card-body">
                <p className='offer-txt'>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="card text-center" style={{ width: "9em", height: "11em" }}>
              <div className="card-title p-2">
                <p className="fs-1" style={{ color: "#f17424" }}>25+</p>
              </div>
              <div className="card-body">
                <p className='offer-txt'>Careers Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="card text-center" style={{ width: "9em", height: "11em" }}>
              <div className="card-title p-2">
                <p className="fs-1" style={{ color: "#f17424" }}>50+</p>
              </div>
              <div className="card-body">
                <p className='offer-txt'>Valued Recruiters</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="card text-center" style={{ width: "9em", height: "11em" }}>
              <div className="card-title p-2">
                <p className="fs-1" style={{ color: "#f17424" }}>10+</p>
              </div>
              <div className="card-body">
                <p className='offer-txt'>Certified Trainers</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="card text-center" style={{ width: "9em", height: "11em" }}>
              <div className="card-title p-2">
                <p className="fs-1" style={{ color: "#f17424" }}>1000+</p>
              </div>
              <div className="card-body">
                <p className='offer-txt'>Students Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
