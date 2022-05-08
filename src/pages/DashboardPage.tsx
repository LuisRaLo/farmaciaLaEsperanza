import React from "react";
import { Image } from "react-bootstrap";
import Lottie from "react-lottie";
import animation1 from "../utils/lotties/94255-sign-up.json";
import animation2 from "../utils/lotties/101372-healthcare-animation.json";
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

  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-12 text-center">
          <Image src={"assets/images/Logo.png"} style={styles.logo} />
        </div>

        <div className="col-6">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Afiliaciones
              </div>
              <Lottie options={lottie1Options} height={200} width={200} />
              <p className="card-text  mt-4 mb-4">
                Aqui puedes ver todas las afiliaciones que hay en la farmacia
              </p>
              <a
                href="/formulario-receta"
                className="btn btn-lg btn-primary"
                style={styles.btnColor}
              >
                Continuar
              </a>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Consulta Médica
              </div>
              <Lottie options={lottie2Options} height={200} width={200} />
              <p className="card-text mt-4 mb-4">
                En este apartado podrás surtir una consulta médica.
              </p>

              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn  btn-lg dropdown-toggle"
                  data-bs-toggle="dropdown"
                  style={styles.btnColor}
                >
                  Consulta médica a:
                </button>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="btnGroupDrop1"
                >
                  <li>
                    <a href="" className="btn btn-outline-primary">
                      Afiliados
                    </a>
                  </li>
                  <br />
                  <li>
                    <a
                      href="/formulario-receta"
                      className="btn btn-outline-secondary"
                    >
                      No Afiliados
                    </a>
                  </li>
                </ul>
              </div>
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
