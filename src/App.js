import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {Navbar} from './components/Navbar';
import { Content } from './components/Content';
import Slider from './components/Slider';
import Course from './components/Course';
import Offer from './components/Offer';
import { Content2 } from './components/Content2';
import { Footer } from './components/Footer';
import { Stories } from './components/Stories';
import { FAQs } from './components/FAQs';
import BlogSlider from './components/Blog';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <div className='App'> 
      <Header />
      <Navbar />
      <Content />
      <Slider />
      <Course />
      <Offer />
      <Content2 />
      <Testimonial />
      <Stories />
      <FAQs />
      <BlogSlider />
      <Footer />
    </div>
  );
}

export default App;
