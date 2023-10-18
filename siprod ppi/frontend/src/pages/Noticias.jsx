import React from "react";
import Header from "../components/Header";
import img1Noticias from "/assets/img/asesoria.jpg";
import Footer from "../components/Footer";

const Noticias = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="card card-noticias">
            <img
              src={img1Noticias}
              className="card-img-top"
              alt="imagen-noticias"
            />
            <div className="card-body">
              <h5 className="card-title">Noticia 1</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore maxime pariatur, iusto vel dolorem praesentium
                accusamus nulla dolor aut nisi mollitia hic repellendus ut
                temporibus reprehenderit cumque, sunt perferendis ad!
              </p>
              <a href="#" className="btn btn-primary">
                Noticia completa
              </a>
            </div>
          </div>

          <div className="card card-noticias">
            <img
              src={img1Noticias}
              className="card-img-top"
              alt="imagen-noticias"
            />
            <div className="card-body">
              <h5 className="card-title">Noticia 2</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore maxime pariatur, iusto vel dolorem praesentium
                accusamus nulla dolor aut nisi mollitia hic repellendus ut
                temporibus reprehenderit cumque, sunt perferendis ad!
              </p>
              <a href="#" className="btn btn-primary">
                Noticia completa
              </a>
            </div>
          </div>

          <div className="card card-noticias">
            <img
              src={img1Noticias}
              className="card-img-top"
              alt="imagen-noticias"
            />
            <div className="card-body">
              <h5 className="card-title">Noticia 3</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore maxime pariatur, iusto vel dolorem praesentium
                accusamus nulla dolor aut nisi mollitia hic repellendus ut
                temporibus reprehenderit cumque, sunt perferendis ad!
              </p>
              <a href="#" className="btn btn-primary">
                Noticia completa
              </a>
            </div>
          </div>

          <div className="card card-noticias">
            <img
              src={img1Noticias}
              className="card-img-top"
              alt="imagen-noticias"
            />
            <div className="card-body">
              <h5 className="card-title">Noticia 4</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore maxime pariatur, iusto vel dolorem praesentium
                accusamus nulla dolor aut nisi mollitia hic repellendus ut
                temporibus reprehenderit cumque, sunt perferendis ad!
              </p>
              <a href="#" className="btn btn-primary">
                Noticia completa
              </a>
            </div>
          </div>

          <div className="card card-noticias">
            <img
              src={img1Noticias}
              className="card-img-top"
              alt="imagen-noticias"
            />
            <div className="card-body">
              <h5 className="card-title">Noticia 5</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore maxime pariatur, iusto vel dolorem praesentium
                accusamus nulla dolor aut nisi mollitia hic repellendus ut
                temporibus reprehenderit cumque, sunt perferendis ad!
              </p>
              <a href="#" className="btn btn-primary">
                Noticia completa
              </a>
            </div>
          </div>

          <div className="card card-noticias">
            <img
              src={img1Noticias}
              className="card-img-top"
              alt="imagen-noticias"
            />
            <div className="card-body">
              <h5 className="card-title">Noticia 6</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore maxime pariatur, iusto vel dolorem praesentium
                accusamus nulla dolor aut nisi mollitia hic repellendus ut
                temporibus reprehenderit cumque, sunt perferendis ad!
              </p>
              <a href="#" className="btn btn-primary">
                Noticia completa
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Noticias;
