import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1Carrousel from "/assets/img/img1.jpg"

const Home = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1Carrousel} alt="imgcarrusel" />
            </div>
            <div className="carousel-item">
              <img src={img1Carrousel} alt="imgcarrusel" />
            </div>
            <div className="carousel-item">
              <img src={img1Carrousel} alt="imgcarrusel" />
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              />
            </svg>
            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                data-bs-toggle="collapse"
                href="#collapse1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                View details &raquo;
              </a>
            </p>
            <div className="collapse" id="collapse1">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              />
            </svg>
            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                data-bs-toggle="collapse"
                href="#collapse2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                View details &raquo;
              </a>
            </p>
            <div className="collapse" id="collapse2">
              <div className="card card-body">
                contenidooooooooo placeholder content for the collapse
                component. This panel is hidden by default but revealed when the
                user activates the relevant trigger.
              </div>
            </div>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              />
            </svg>
            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a
                className="btn btn-secondary"
                data-bs-toggle="collapse"
                href="#collapse3"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                View details &raquo;
              </a>
            </p>
            <div className="collapse" id="collapse3">
              <div className="card card-body">
                putoos placeholder content for the collapse component. This
                panel is hidden by default but revealed when the user activates
                the relevant trigger.
              </div>
            </div>
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
