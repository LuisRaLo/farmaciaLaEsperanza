import React from "react";
import { Image } from "react-bootstrap";
import Lottie from "react-lottie";
import animation1 from "../utils/lotties/93561-customer-service.json";
import animation2 from "../utils/lotties/101372-healthcare-animation.json";
import animation3 from "../utils/lotties/101103-hematology.json";
import animation4 from "../utils/lotties/81900-medicaments.json";

import colorConstants from "../utils/constants/colors";

export default function DashboardPage() {
  const lottie1Options = {
    loop: true,
    autoplay: true,
    animationData: animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottie2Options = {
    loop: true,
    autoplay: true,
    animationData: animation2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottie3Options = {
    loop: true,
    autoplay: true,
    animationData: animation3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottie4Options = {
    loop: true,
    autoplay: true,
    animationData: animation4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="row text-center">
        <div className="col-12 text-center">
          <Image src={"assets/images/Logo.png"} style={styles.logo} />
        </div>

        <div className="col-3 mb-5">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Socios
              </div>
              <Lottie options={lottie1Options} height={200} width={200} />
              <p className="card-text mt-1 mb-4">
                En este apartado podrás ver todos los socios que hay en la base
                de datos.
              </p>
              <button
                id="btnGroupDrop1"
                type="button"
                className="col-12 btn btn-lg btn-primary mb-1"
                style={styles.btnColor}
              >
                Alta de socios
              </button>

              <button
                id="btnGroupDrop1"
                type="button"
                className="col-12 btn btn-lg btn-primary "
                style={styles.btnColor}
              >
                Consulta de socios
              </button>
            </div>
          </div>
        </div>

        <div className="col-3 mb-5">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Servicios
              </div>
              <Lottie options={lottie2Options} height={200} width={200} />

              <p className="card-text mb-5 mt-4">
                En este apartado podrás ver todos los servicios que hay en la
                base de datos.
              </p>

              <div className="btn-group dropend col-12 mb-1">
                <button
                  type="button"
                  className="btn btn-lg dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={styles.btnColor}
                >
                  Médico
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="" className="btn btn-outline-secondary col-12 mb-2 ">
                      Consulta a Afiliados
                    </a>
                  </li>
                  <li>
                    <a
                      href="/formulario-receta"
                      className="btn btn-outline-secondary col-12 mb-2"
                    >
                      Consulta a No Afiliados
                    </a>
                  </li>

                  <li>
                    <a
                      href="/formulario-receta"
                      className="btn btn-outline-secondary col-12 mb-2"
                    >
                      Certificado Médico
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 mb-5">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Laboratorio Clínico
              </div>
              <Lottie options={lottie3Options} height={200} width={200} />
              <p className="card-text  mt-4 mb-4">
                Aqui puedes ver todas las afiliaciones que hay en la farmacia
              </p>

              <div className="btn-group dropend col-12 mb-1">
                <button
                  type="button"
                  className="btn btn-lg"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={styles.btnColor}
                >
                  Cotización
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 mb-5">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Farmacia
              </div>
              <Lottie options={lottie4Options} height={200} width={200} />
              <p className="card-text mb-4 mt-3">
                Selecciona el sistema que deseas utilizar:
              </p>
              <a
                href="/formulario-receta"
                className="btn btn-lg btn-primary col-12 mb-2"
                style={styles.btnColor}
              >
                Punto de venta
              </a>

              <a
                href="/formulario-receta"
                className="btn btn-lg btn-primary col-12 mb-2"
                style={styles.btnColor}
              >
                Consultar medicamentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  logo: {
    width: "15%",
    height: "auto",
    margin: "0 auto",
    marginBottom: "5rem",
  },
  btnColor: {
    backgroundColor: colorConstants.ligth.verdeEsperanza,
    color: colorConstants.ligth.textLight,
    border: "none",
  },
  titulos: {
    color: colorConstants.ligth.verdeEsperanza2,
    fontSize: "2rem",
    fontWeight: "bold",
  },

  myCard: {
    width: "100%",
    margin: "auto",
    elevation: "1",
    borderRadius: "1rem",
    border: "1px solid #ccc",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "translateY(-3px)",
    },
  },
};
