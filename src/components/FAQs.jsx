import React, { useState } from "react";
import FAQ from './img/FAQs-bro.png';

export const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "There Are Many Variations Of Passages?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    },
    {
      question: "Lorem Ipsum Is Simply Dummy Text Of The?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    },
    {
        question: "Of A Page When Looking At Its Layout?",
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
      },
      {
        question: "Page Editors Now Use Lorem Ipsum As Their?",
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
      },
      {
        question: "Majority Have Suffered Alteration In Some For?",
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
      },
    {
      question: "Of A Page When Looking At Its Layout?",
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#f17424" }}>FAQ
      </h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={FAQ}
            alt="FAQ Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3">
              <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="mb-0">{faq.question}</h5>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <hr className="mx-2 my-0"></hr>
              {activeIndex === index && (
                <div className="p-3  border-top-0 rounded">
                  <p className="mb-0">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

