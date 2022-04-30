import React from "react";

export default function DashboardPage() {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-12">
          <div className="h1">Farmacia la "Esperanza"</div>
        </div>

        <div className="col-12">
          <div className="card" style={styles.myCard}>
            <div className="card-body">
              <h5 className="card-title">Consulta Médica</h5>
              <p className="card-text">
               En este apartado podrás surtir una consulta médica.
              </p>
              <a href="/formulario-receta" className="btn btn-primary">
                Continuar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  myCard: {
    width: "18rem",
    margin: "auto",
    marginTop: "2rem",
    elevation: "1",
    borderRadius: "1rem",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "translateY(-3px)",
    },
  },

};

