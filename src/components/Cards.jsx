import React from "react";
import "./Cards.css";

const data = [
  {
    tag: "Training",
    title: "Learn AI",
    desc: "Unlock your AI skills and career potential with deep-dive coursework, hands-on tutorials, and more",
  },
  {
    tag: "Training",
    title: "PartyRock, an Amazon Bedrock Playground",
    desc: "Learn generative AI fundamentals, no coding required",
  },
  {
    tag: "Training",
    title: "AWS Skill Builder",
    desc: "Get started on AI training with content built by AWS experts",
  },
  {
    tag: "Technical Resources",
    title: "Developer Center",
    desc: "Learn, build, and explore with generative AI tutorials and resources",
  },
  {
    tag: "Exec Brief",
    title: "An executive’s guide to agentic AI",
    desc: "Learn how leading businesses are building a competitive advantage with AI agents",
  },
  {
    tag: "Training",
    title: "AWS Solutions Library",
    desc: "Browse curated solutions and discover common AI use cases",
  },
];

export default function Cards() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="custom-card h-100">
              <span className="tag">{item.tag}</span>

              <h4 className="title">{item.title}</h4>

              <p className="desc">{item.desc}</p>

              <div className="arrow">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}