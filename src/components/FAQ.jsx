import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const faqData = [
  "How can I get started with commrz™?",
  "What currencies does website work with?",
  "How to Connect a Domain You Own to Your Site?",
  "What is HTTPS and SSL?",
  "Unable to Sign In to Your Account: Forgot Password",
  "Which languages does website support?",
  "Can I use my own domain name?",
  "In what countries can I use website?",
  "Troubleshooting technical issues"
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              {item}
              <span className="arrow">
                {activeIndex === index ? "−" : "›"}
              </span>
            </div>

            <div className="faq-answer">
              <p>
                This is sample answer text. You can replace it with real content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;