function ServicesSection() {
  return (
    <div style={{ padding: "50px", textAlign: "center", background: "#black" }}>
      
      <h4 style={{ color: "green", letterSpacing: "2px" }}>OUR SERVICES</h4>
      <h1>High Quality Services for You.</h1>
      <p>We are committed to sustainability. eco-friendly initiatives.</p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "40px",
        flexWrap: "wrap"
      }}>

        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>Web Designing & Development</h3>
          <p>We create robust web applications with latest technologies.</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>Mobile App Development</h3>
          <p>Custom Android & iOS apps with smooth experience.</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>E-Commerce Solutions</h3>
          <p>Sell products online with secure payment integration.</p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <h3>Online Promotion</h3>
          <p>Grow your brand with digital marketing solutions.</p>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  width: "250px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

export default ServicesSection;