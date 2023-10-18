import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1Conocenos from "../../public/assets/img/tarjeta1.jpg"
import img2Conocenos from "../../public/assets/img/asesoria.jpg"

const Conocenos = () => {
  return (
    <>
      <Header />
      {/* <!--seccion de conocenos--> */}
      {/* <!--tarjeta 1--> */}
      <section className="container-sm tarjetas">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img1Conocenos}
                className="img-fluid rounded-start"
                alt="tarjetaOficina"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">¿Quiénes somos?</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum consequuntur exercitationem cum, dolorum amet suscipit
                  laboriosam sunt error, reprehenderit iste explicabo facilis
                  ea, sed animi ad nulla! Nostrum, nesciunt animi Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Nostrum
                  consequuntur exercitationem cum, dolorum amet suscipit
                  laboriosam sunt error, reprehenderit iste explicabo facilis
                  ea, sed animi ad nulla! Nostrum, nesciunt animi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--tarjeta2--> */}
      <section className="container-sm tarjetas">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">¿Qué hacemos?</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum consequuntur exercitationem cum, dolorum amet suscipit
                  laboriosam sunt error, reprehenderit iste explicabo facilis
                  ea, sed animi ad nulla! Nostrum, nesciunt animi Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Nostrum
                  consequuntur exercitationem cum, dolorum amet suscipit
                  laboriosam sunt error, reprehenderit iste explicabo facilis
                  ea, sed animi ad nulla! Nostrum, nesciunt animi
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={img2Conocenos}
                className="img-fluid rounded-start"
                alt="tarjetaAsesoria"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!--tarjeta 3 (MAPA)--> */}
      <section className="container tarjetaMapa">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">¿Dónde nos ubicamos?</h5>
            <p className="card-text text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              consequuntur exercitationem cum, dolorum amet suscipit laboriosam
              sunt error, reprehenderit iste explicabo facilis ea, sed animi ad
              nulla! Nostrum, nesciunt animi Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nostrum consequuntur exercitationem
              cum, dolorum amet suscipit laboriosam sunt error, reprehenderit
              iste explicabo facilis ea, sed animi ad nulla! Nostrum, nesciunt
              animi
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4750.076929575182!2d-75.56767491006084!3d6.317931228767453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f1a5e949db1%3A0xe727bc19623c7c1f!2sPolit%C3%A9cnico%20Colombiano%20Jaime%20Isaza%20Cadavid!5e0!3m2!1ses!2sco!4v1695595743750!5m2!1ses!2sco"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="card-img-bottom"
          ></iframe>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Conocenos;
