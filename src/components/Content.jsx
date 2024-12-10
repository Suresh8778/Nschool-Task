import React from 'react';
import Banner from './img/Version control-bro.png';

export const Content = () => {
  return (
    <div className='container'>
        <div className="row  mt-3">
        <div className="col-lg-6">
            <p className='display-5 p-1'>Get start your <span style={{color:"#f17424"}}>IT career </span> 
            development with</p>
            <h2 style={{color:"#f17424"}} className='p-1'>Nschool Academy</h2>
            <p className='py-2 px-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet iusto voluptatum illum.</p> 
            <button type="button" class="con-btn">Get 100% Placement Assistance*</button>
        </div>
        <div className="col-lg-6">
            <img src={Banner} width={400} className='img-ban'></img>
        </div>
        </div>
    </div>
  )
}
