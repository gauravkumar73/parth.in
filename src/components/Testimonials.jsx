import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

function Testimonials() {
  const data = [
    {
      text: "Wonderful team to work with. They are responsive and work efficiently. Highly recommended.",
      name: "Deepak Kumar",
      role: "Founder - DSM Celebration"
    },
    {
      text: "The team provided us with exceptional client service, expertise, and completely redesigning our website.",
      name: "Jayant Jha",
      role: "CEO - Phobstreets"
    },
    {
      text: "I had a great experience working with them. They turned my vision into a clean and user-friendly website.",
      name: "Seemaa Gupta",
      role: "Founder - Vastuedam"
    }
  ];

  return (
    <div className="container py-5 text-center bg-black">

      <h2 className="fw-bold mb-2">Our Clients Feedback</h2>
      <p className="text-muted mb-5">
        Know what people are saying about us around the globe.
      </p>

      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>

            <div className="card h-100 shadow-sm border-0 rounded-4 p-4 position-relative">

              {/* Quote Top */}
              <FaQuoteLeft className="position-absolute top-0 start-0 m-3 fs-4 text-dark" />

              <p className="text-muted mt-4">{item.text}</p>

              {/* Bottom Section */}
              <div className="mt-4 pt-3 border-top text-center">

                <div className="fs-1 mb-2">👤</div>

                <div className="text-warning mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <h6 className="fw-bold mb-0">{item.name}</h6>
                <small className="text-muted">{item.role}</small>

              </div>

              {/* Quote Bottom */}
              <FaQuoteRight className="position-absolute bottom-0 end-0 m-3 fs-4 text-dark" />

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Testimonials;