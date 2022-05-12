import React from "react";
import { Image } from "react-bootstrap";
import Lottie from "react-lottie";
import animation1 from "../../utils/lotties/93561-customer-service.json";
import animation2 from "../../utils/lotties/101372-healthcare-animation.json";
import animation3 from "../../utils/lotties/101103-hematology.json";
import animation4 from "../../utils/lotties/81900-medicaments.json";
import animation5 from "../../utils/lotties/102270-console-and-configure.json";

import colorConstants from "../../utils/constants/colors";

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

  const lottie5Options = {
    loop: true,
    autoplay: true,
    animationData: animation5,
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

        <div className="col-4 mb-5">
          <a href="/customers" className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Socios
              </div>
              <Lottie options={lottie1Options} height={200} width={220} />
            </div>
          </a>
        </div>

        <div className="col-4 mb-5">
          <a href="/services" className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Servicios
              </div>
              <Lottie options={lottie2Options} height={200} width={200} />
            </div>
          </a>
        </div>

        <div className="col-4 mb-5">
          <a href="/pharmacy" className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Farmacia
              </div>
              <Lottie options={lottie4Options} height={200} width={200} />
            </div>
          </a>
        </div>

        <div className="col-2 mb-5"></div>

        <div className="col-4 mb-5">
          <a href="/laboratory" className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Laboratorio
              </div>
              <Lottie options={lottie3Options} height={200} width={200} />
            </div>
          </a>
        </div>

        <div className="col-4 mb-5">
          <a href="/configuration" className="card" style={styles.myCard}>
            <div className="card-body">
              <div className="card-title mb-4" style={styles.titulos}>
                Configuración
              </div>
              <Lottie options={lottie5Options} height={200} width={250} />
            </div>
          </a>
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

  titulos: {
    color: colorConstants.ligth.textDark,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  myCard: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    elevation: "1",
    borderRadius: "2rem",
    border: "1px solid #ccc",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "translateY(-30px)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
};
