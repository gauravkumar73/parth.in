import { useState } from "react";

function OfferSection() {
  const [active, setActive] = useState("website");

  const data = {
    website: {
      title: "Website - Power Up Your Storefront",
      points: [
        "Endless Customization",
        "Built for Speed & Growth",
        "Mobile-Ready",
        "Flexible Checkout",
        "Financial Tools",
        "Customer Support Automation",
        "Seamless Catalogue Management",
      ],
      image: "/images/website.png",
    },
    marketing: {
      title: "Marketing - Grow Your Business",
      points: ["SEO", "Ads", "Email Marketing", "Social Media"],
      image: "/images/marketing.png",
    },
    conversion: {
      title: "Conversion - Boost Sales",
      points: ["Funnels", "Landing Pages", "A/B Testing"],
      image: "/images/conversion.png",
    },
    whatsapp: {
      title: "WhatsApp Automation",
      points: ["Auto Reply", "Broadcast", "CRM Integration"],
      image: "/images/whatsapp.png",
    },
    shipping: {
      title: "Shipping Solutions",
      points: ["Fast Delivery", "Tracking", "COD Support"],
      image: "/images/shipping.png",
    },
  };

  return (
    <div className="container py-5 text-light">
      <div className="text-center mb-4">
        <p className="text-primary">Our Offerings</p>
        <h2 className="fw-bold">Your Profitability Enabler</h2>
      </div>

      <div className="bg-dark p-4 rounded-4 border">
        
        {/* Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`btn rounded-pill px-4 ${
                active === key ? "btn-light text-dark" : "btn-outline-light"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="row align-items-center">
          
          {/* Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={data[active].image}
              alt=""
              className="img-fluid rounded-4"
            />
          </div>

          {/* Text */}
          <div className="col-lg-6">
            <h4 className="mb-3">{data[active].title}</h4>

            <ul>
              {data[active].points.map((item, i) => (
                <li key={i} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn btn-link text-primary mt-3">
              View Detail ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;