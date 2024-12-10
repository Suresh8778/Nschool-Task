import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pro1 from './img/pro1.png';
import pro2 from './img/pro2.jpg';

const testimonials = [
  {
    quote:
      "By Injected Humour, Or Randomised Words There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form.",
    name: "Cameron Williamson",
    role: "UI/UX Designer, Nschool",
    image: pro1,
  },
  {
    quote: "By Injected Humour, Or Randomised Words There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Altera",
    name: "Jane Doe",
    role: "Software Engineer, TechCorp",
    image: pro2,
  },
];

// Custom Arrow Component
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      [direction === "next" ? "right" : "left"]: "-60px",
      transform: "translateY(-50%)",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "20px",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    {direction === "next" ? ">" : "<"}
  </button>
);

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          position: "relative",
        }}
      >
        {/* Left: Slider */}
        <div className="col-lg-6 col-12"
          style={{
            flex: 1,
            maxWidth: "40%",
            background:"#19467E",
            color:"white",
            padding:"40px 10px"
          }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f17424",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "2rem",
                }}
              >
                <p style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  {testimonial.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <h4 style={{ margin: "15px 0"}}>{testimonial.name}</h4>
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right: Text Content */}
        <div className="col-lg-6"
          style={{
            flex: 1,
            maxWidth: "40%",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#06457d", fontSize: "2rem", marginBottom: "1rem" }}>Testimonials</h2>
          <h3 style={{ color: "#ff6600", fontSize: "1.5rem", marginBottom: "1rem" }}>
            What Students Say About Us
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#333" }}>
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority
            Have Suffered Alteration In Some Form.
          </p>
        </div>
      </div>
    </div>
  );
};
