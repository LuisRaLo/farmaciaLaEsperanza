import React from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import createReceta from "../components/createReceta";
import DateHelpers from "../utils/helpers/DateHelpers";
import { IRecetaPaciente } from "../utils/interfaces/IRecetaPaciente";

const FormularioRecetaPage = () => {
  const [receta, setReceta] = React.useState<IRecetaPaciente>({
    nombre: "",
    telefono: "",
    direccion: "",
    medicamentos: [],
    edad: NaN,
    peso: "",
    talla: "",
    temperatura: "",
    ta: "",
    fc: "",
    fr: "",
    so2: "",
    tratamientos: [],
    fecha: DateHelpers.getCurrentDateStringLarge(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReceta({ ...receta, [name]: value.toUpperCase() });
  };

  const agregarMedicamento = (event: any) => {
    event.preventDefault();

    let input: any = document.getElementById("userinput");
    let ul: any = document.getElementById("medicamentos");
    let li: any = document.createElement("li");

    if (input.value) {
      setReceta({
        ...receta,
        medicamentos: [...receta.medicamentos, (input.value).toUpperCase()],
      });
      li.classList.add("list-group-item");
      li.appendChild(document.createTextNode((input.value).toUpperCase()));
      ul.appendChild(li);
      input.value = "";
      input.focus();
    }

    return false;
  };

  const agregarTratamiento = (event: any) => {
    event.preventDefault();

    const tratamientoText: any = document.getElementById("addTratamiento");
    const tratamientosList: any = document.getElementById("tratamientos");
    const li: any = document.createElement("li");

    if (tratamientoText.value) {
      setReceta({
        ...receta,
        tratamientos: [...receta.tratamientos, (tratamientoText.value).toUpperCase()],
      });

      li.classList.add("list-group-item");
      li.appendChild(document.createTextNode((tratamientoText.value).toUpperCase()));
      tratamientosList.appendChild(li);
      tratamientoText.value = "";
      tratamientoText.focus();
    }

    return false;
  };

  const generarReceta = (event: any) => {
    event.preventDefault();
    createReceta({ receta: receta });

    return alert("Receta generada con éxito");
  };

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <div className="text-center" style={styles.titleContainer}>
        <p style={styles.titleText}>
          <strong>Farmacia "La Esperanza"</strong>
        </p>
        <p style={styles.textInformativo}>
          {DateHelpers.getCurrentDateStringLarge()}
        </p>
      </div>

      <Container>
        <Form id="formulario-receta" onSubmit={generarReceta}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Nombre del paciente</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre del paciente"
                  id="pacienteName"
                  name="nombre"
                  value={receta.nombre}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-sm-1">
              <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Edad"
                  min={0}
                  max={99}
                  id="pacienteEdad"
                  name="edad"
                  value={receta.edad}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-sm-4">
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono"
                  min={0}
                  max={99}
                  id="pacienteTelefono"
                  name="telefono"
                  value={receta.telefono}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dirección"
                  id="pacienteName"
                  name="direccion"
                  value={receta.direccion}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <div className="col-12">
              <header>
                <p>Medicamentos a los que es alergico</p>
              </header>
              <div className="input-group mb-3">
                <input
                  id="userinput"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del medicamento"
                  aria-label="Agregar medicamento"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-info"
                    id="enter"
                    type="button"
                    onClick={agregarMedicamento}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <ul className="list-group" id="medicamentos"></ul>
            </div>
          </Row>

          <Row>
            <Col className="col-2">
              <Form.Group className="mb-3">
                <Form.Label>Peso</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Peso"
                  id="pacienteName"
                  name="peso"
                  value={receta.peso}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-3">
              <Form.Group className="mb-3">
                <Form.Label>Talla</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Peso"
                  id="Talla"
                  name="talla"
                  value={receta.talla}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-2">
              <Form.Group className="mb-3">
                <Form.Label>Temperatura</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Temperatura"
                  id="pacienteName"
                  name="temperatura"
                  value={receta.temperatura}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-2">
              <Form.Group className="mb-3">
                <Form.Label>T/A</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="T/A"
                  id="pacienteName"
                  name="ta"
                  value={receta.ta}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-1">
              <Form.Group className="mb-3">
                <Form.Label>F/C</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="F/C"
                  id="pacienteName"
                  name="fc"
                  value={receta.fc}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-1">
              <Form.Group className="mb-3">
                <Form.Label>F/R</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="F/R"
                  id="pacienteName"
                  name="fr"
                  value={receta.fr}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col className="col-1">
              <Form.Group className="mb-3">
                <Form.Label>SPO2</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="SPO2"
                  id="pacienteName"
                  name="so2"
                  value={receta.so2}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <div className="col-12">
              <header>
                <p>Medicamentos a los que es alergico</p>
              </header>
              <div className="input-group mb-3">
                <input
                  id="addTratamiento"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del medicamento"
                  aria-label="Agregar medicamento"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-info"
                    id="enter"
                    type="button"
                    onClick={agregarTratamiento}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <ul className="list-group" id="tratamientos"></ul>
            </div>
          </Row>

          <Row>
            <Col className="col-12 text-center mb-4 mt-4">
              <Button variant="primary" type="submit">
                Generar receta
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </ThemeProvider>
  );
};

const { width, height } = window.screen;

const styles = {
  titleContainer: {
    margin: "auto",
    padding: "10px",
    marginBottom: "3rem",
    backgroundColor: "rgba(0, 111, 201, 1)",
    color: "white",
  },
  titleText: {
    fontSize: "3rem",
    fontWeight: "300",
  },
  subtitleText: {
    fontSize: "1.5rem",
    fontWeight: "350",
  },
  text: {
    fontSize: "1.5rem",
    fontWeight: "350",
  },
  textInformativo: {
    fontSize: "1rem",
    fontWeight: "350",
  },

  formulario: {
    width: width * 0.8,
    padding: "2rem",
    margin: "auto",

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
