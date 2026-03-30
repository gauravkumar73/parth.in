import { Link } from "react-router-dom";
const BannerSlider = () => {
  return (
    <div
      id="bannerCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/baner1.jpeg"
            className="d-block w-100"
            alt="Banner 1"
          />
          <div className="carousel-caption">
            <h2>Welcome to Our Store</h2>
            <p>Best products at best price</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
              src="/banner.jpeg"
            className="d-block w-100"
            alt="Banner 2"
          />
          <div className="carousel-caption">
            <h2>Big Sale</h2>
            <p>Up to 50% Off</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
              src="/hh.jpeg"
            className="d-block w-100"
            alt="Banner 3"
          />
          <div className="carousel-caption">
            <h2>New Arrivals</h2>
            <p>Check out latest products</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default BannerSlider;