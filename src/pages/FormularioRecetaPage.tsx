import React from "react";

const FormularioRecetaPage = () => {
  const generarReceta = (event: any) => {
    event.preventDefault();

    console.log("Generando receta");
  };

  return (
    <div className="container p-4">
      <div className="row text-center">
        <div className="col-12">
          <div className="h1">Formulario de receta</div>
        </div>

        {/* formulario */}
        <form style={styles.formulario}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Nombre del paciente
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre del paciente"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Nombre del médico</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre del médico"
            />
          </div>

          <button className="btn btn-primary mt-4" onClick={generarReceta}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

const { width, height } = window.screen;

const styles = {
  formulario: {
    width: width * 0.8,
    padding: "2rem",

    elevation: "1",
    borderRadius: "1rem",
    border: "1px solid #ccc",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "translateY(-3px)",
    },
  },
};

export default FormularioRecetaPage;
