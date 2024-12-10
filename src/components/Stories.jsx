import React from "react";
import Slider from "react-slick";

export const Stories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const stories = [
    {
      name: "Charlotte",
      description: "Passages Of Lorem Ipsum",
      videoSrc: "https://www.youtube.com/embed/Cu3R5it4cQs?si=JNw-EikojGBUfWf_",
    },
    {
      name: "John Doe",
      description: "Passages Of Lorem Ipsum",
      videoSrc: "https://www.youtube.com/embed/Cu3R5it4cQs?si=JNw-EikojGBUfWf_",
    },
    {
      name: "Jane Smith",
      description: "Passages Of Lorem Ipsum",
      videoSrc: "https://www.youtube.com/embed/Cu3R5it4cQs?si=JNw-EikojGBUfWf_",
    },
    {
      name: "Emily",
      description: "Passages Of Lorem Ipsum",
      videoSrc: "https://www.youtube.com/embed/Cu3R5it4cQs?si=JNw-EikojGBUfWf_",
    },
  ];

  return (
    <div style={{ backgroundColor: "#003366", padding: "50px 20px", color: "white", marginTop: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Placement Stories</h2>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration.
      </p>
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index} style={{ padding: "10px", margin: "5px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                maxWidth: "300px", 
                margin: "0 auto",
              }}
            >
              {story.videoSrc.includes("embed") ? (
                <div style={{ position: "relative", overflow: "hidden", paddingTop: "56.25%" }}>
                  <iframe
                    src={story.videoSrc}
                    title={story.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  ></iframe>
                </div>
              ) : (
                <img
                  src={story.videoSrc}
                  alt={`${story.name}'s video`}
                  style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
                />
              )}
              <h3 style={{ color: "#003366", margin: "10px 0" }}>{story.name}</h3>
              <p style={{ color: "#666" }}>{story.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
