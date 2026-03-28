import { FaHeartbeat, FaShoppingCart, FaBuilding, FaHandsHelping, FaTruck, FaTshirt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Industries() {
  const data = [
    { title: "Healthcare", desc: "Improved engagement and insights.", icon: <FaHeartbeat /> },
    { title: "E-commerce", desc: "Online business solutions.", icon: <FaShoppingCart /> },
    { title: "Real Estate", desc: "Marketplace for buyers & sellers.", icon: <FaBuilding /> },
    { title: "NGO", desc: "Raise funds through campaigns.", icon: <FaHandsHelping /> },
    { title: "Logistic", desc: "Manage shipping operations.", icon: <FaTruck /> },
    { title: "Fashion", desc: "Buy fashion products online.", icon: <FaTshirt /> },
  ];

  return (
    <div className="container py-5 text-center">

      <p className="text-success small">+ THE INDUSTRIES WE SERVE</p>
      <h1 className="fw-bold">Innovative IT Solutions for Every Industry</h1>
      <p className="text-muted mb-5">
        Delivering innovative services across industries.
      </p>

      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4 position-relative">

              {/* Arrow */}
              <div style={{ position: "absolute", top: "15px", right: "15px" }}>
                <FiArrowUpRight />
              </div>

              {/* Icon */}
              <div className="text-success fs-2 mb-3">
                {item.icon}
              </div>

              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.desc}</p>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;