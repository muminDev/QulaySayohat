import warsaw from "../images/warsaw.png";
import milliy from "../images/milliy.png";
import davlat from "../images/davlat.png";
import autoservice from "../images/autoservice.png";
import ijaraUylar from "../images/ijaraUylar.png";
import ijaraMashinalar from "../images/ijaraMashinalar.png";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide custom-carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={warsaw} className="custom-carousel-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={milliy} className="custom-carousel-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={davlat} className="custom-carousel-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={autoservice} className="custom-carousel-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img
            src={ijaraMashinalar}
            className="custom-carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img src={ijaraUylar} className="custom-carousel-img" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
