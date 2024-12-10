import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Node.js Cluster",
    text: "Optimize Nodejs app performance with clustering.",
    imgSrc: blog1,
  },
  {
    id: 2,
    title: "SQLite Using Node.js",
    text: "Lorem Ipsum is simply dummy text of the printing.",
    imgSrc: blog1,
  },
  {
    id: 3,
    title: "React vs Vue",
    text: "There are many variations of passages of Lorem Ipsum available.",
    imgSrc: blog1,
  },
  {
    id: 4,
    title: "Other Blog Post",
    text: "Lorem Ipsum is simply dummy text of the printing.",
    imgSrc: blog1,
  },
  {
    id: 5,
    title: "React vs Vue",
    text: "There are many variations of passages of Lorem Ipsum available.",
    imgSrc: blog1,
  },
  {
    id: 6,
    title: "Other Blog Post",
    text: "Lorem Ipsum is simply dummy text of the printing.",
    imgSrc: blog1,
  }
];

function BlogSlider() {
  return (
    <div className="container mx-auto  mt-0 img-slider col-12 mb-3" id="03">
        <div className="container">
        <h4 className="display-6 my-2 text-center" style={{ color: "#f17424" }}>Blog
        </h4>
        <p className="px-5 py-2 text-center">
          NSCHOOL Academy provides live online training that is designed to focus on individual participant results, engaging virtual activities, and personalized experiences. NSCHOOL Academy online learning can help you get the job, the raise, or the promotion in a wide range of careers.
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={post.imgSrc} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            {blogPosts.slice(3).map((post) => (
              <Card key={post.id} style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={post.imgSrc} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BlogSlider;
