import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import createReceta from "../../../components/createReceta";
import colorConstants from "../../../utils/constants/colors";
import DateHelpers from "../../../utils/helpers/DateHelpers";
import { IRecetaPaciente } from "../../../utils/interfaces/IRecetaPaciente";
import { ITratamiento } from "../../../utils/interfaces/Paciente/ITratamiento";

const estadosMexico = [
  {
    id: "1",
    value: "Aguascalientes",
    label: "Aguascalientes",
  },
  {
    id: "2",
    value: "Baja California",
    label: "Baja California",
  },
  {
    id: "3",
    value: "Baja California Sur",
    label: "Baja California Sur",
  },
  {
    id: "4",
    value: "Campeche",
    label: "Campeche",
  },
  {
    id: "5",
    value: "Coahuila",
    label: "Coahuila",
  },
  {
    id: "6",
    value: "Colima",
    label: "Colima",
  },
  {
    id: "7",
    value: "Chiapas",
    label: "Chiapas",
  },
  {
    id: "8",
    value: "Chihuahua",
    label: "Chihuahua",
  },
  {
    id: "9",
    value: "Ciudad de México",
    label: "Ciudad de México",
  },
  {
    id: "10",
    value: "Durango",
    label: "Durango",
  },
  {
    id: "11",
    value: "Guanajuato",
    label: "Guanajuato",
  },
  {
    id: "12",
    value: "Guerrero",
    label: "Guerrero",
  },
  {
    id: "13",
    value: "Hidalgo",
    label: "Hidalgo",
  },
  {
    id: "14",
    value: "Jalisco",
    label: "Jalisco",
  },
  {
    id: "15",
    value: "México",
    label: "México",
  },
  {
    id: "16",
    value: "Michoacán",
    label: "Michoacán",
  },
  {
    id: "17",
    value: "Morelos",
    label: "Morelos",
  },
  {
    id: "18",
    value: "Nayarit",
    label: "Nayarit",
  },
  {
    id: "19",
    value: "Nuevo León",
    label: "Nuevo León",
  },
  {
    id: "20",
    value: "Oaxaca",
    label: "Oaxaca",
  },
  {
    id: "21",
    value: "Puebla",
    label: "Puebla",
  },
  {
    id: "22",
    value: "Querétaro",
    label: "Querétaro",
  },
  {
    id: "23",
    value: "Quintana Roo",
    label: "Quintana Roo",
  },
  {
    id: "24",
    value: "San Luis Potosí",
    label: "San Luis Potosí",
  },
  {
    id: "25",
    value: "Sinaloa",
    label: "Sinaloa",
  },
  {
    id: "26",
    value: "Sonora",
    label: "Sonora",
  },
  {
    id: "27",
    value: "Tabasco",
    label: "Tabasco",
  },
  {
    id: "28",
    value: "Tamaulipas",
    label: "Tamaulipas",
  },
  {
    id: "29",
    value: "Tlaxcala",
    label: "Tlaxcala",
  },
  {
    id: "30",
    value: "Veracruz",
    label: "Veracruz",
  },
  {
    id: "31",
    value: "Yucatán",
    label: "Yucatán",
  },
  {
    id: "32",
    value: "Zacatecas",
    label: "Zacatecas",
  },
];

const FormularioRecetaPage = () => {
  const [receta, setReceta] = useState<IRecetaPaciente>({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    telefono: "",
    direccion: {
      calle: "",
      MzoNi: "",
      LtoNe: "",
      colonia: "",
      codigoPostal: "",
      municipio: "",
      estado: "",
    },
    medicamentosAlergia: [],
    edad: 0,
    peso: "",
    talla: "",
    temperatura: "",
    ta: "",
    fc: "",
    fr: "",
    so2: "",
    tratamientos: [],
    fecha: DateHelpers.getCurrentDateStringLarge(),
    recomendaciones: "",
  });

  const [tratamientoObj, setTratamientoObj] = useState<ITratamiento>({
    medicamento: "",
    dosis: "",
    duracion: "",
    frecuencia: "",
    observaciones: "",
  });

  const [medicamentosAlergia, setMedicamentosAlergia] = useState<{
    medicamentoAlergia: string;
  }>({
    medicamentoAlergia: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReceta({ ...receta, [name]: value });
  };

  const handleChangeDireccion = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReceta({
      ...receta,
      direccion: { ...receta.direccion, [name]: value },
    });
  };

  const handleChangeTratamiento = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTratamientoObj({ ...tratamientoObj, [name]: value });
  };

  const handleChangeMedicamentosAlergia = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setMedicamentosAlergia({ ...medicamentosAlergia, [name]: value });
  };

  const agregarMedicamentoAlergico = (event: any) => {
    event.preventDefault();

    const medicamentoAlergia = medicamentosAlergia.medicamentoAlergia;

    if (medicamentoAlergia !== "") {
      setReceta({
        ...receta,
        medicamentosAlergia: [
          ...receta.medicamentosAlergia,
          medicamentoAlergia,
        ],
      });
      setMedicamentosAlergia({
        medicamentoAlergia: "",
      });
    }

    return false;
  };

  const eliminarMedicamentoAlergico = (medicamentoAlergia: string) => {
    const ArrayMedicamentosAlergia = receta.medicamentosAlergia;
    const index = ArrayMedicamentosAlergia.indexOf(medicamentoAlergia);
    if (index > -1) {
      ArrayMedicamentosAlergia.splice(index, 1);
      setReceta({
        ...receta,
        medicamentosAlergia: ArrayMedicamentosAlergia,
      });
    }
  };

  const listadoMedicamentosAlergia = receta.medicamentosAlergia.map(
    (medicamento: string, index: number) => {
      return (
        <ListGroup.Item key={index} variant="dark">
          <Row>
            <Col>{medicamento}</Col>
            <Col sm={2} className="text-right">
              <Button
                variant="danger"
                onClick={() => eliminarMedicamentoAlergico(medicamento)}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      );
    }
  );

  const listadoTratamientoList = receta.tratamientos.map(
    (tratamientoObj: ITratamiento, index: number) => {
      return (
        <ListGroup.Item key={index} variant="dark">
          <Row>
            <Col>{tratamientoObj.medicamento}</Col>
            <Col>{tratamientoObj.dosis}</Col>
            <Col>{tratamientoObj.duracion}</Col>
            <Col>{tratamientoObj.frecuencia}</Col>
            <Col>{tratamientoObj.observaciones}</Col>
            <Col className="justify-content-end">
              <Button
                variant="danger"
                onClick={() => eliminarTratamiento(index)}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      );
    }
  );

  const agregarTratamiento = (event: any) => {
    event.preventDefault();

    const ArrayTratamientos: ITratamiento[] = [...receta.tratamientos];

    if (tratamientoObj.medicamento && tratamientoObj.dosis) {
      ArrayTratamientos.push(tratamientoObj);
      setReceta({
        ...receta,
        tratamientos: ArrayTratamientos,
      });
      setTratamientoObj({
        medicamento: "",
        dosis: "",
        duracion: "",
        frecuencia: "",
        observaciones: "",
      });
    }
  };

  const eliminarTratamiento = (event: any) => {
    const ArrayTratamientos: ITratamiento[] = [...receta.tratamientos];
    ArrayTratamientos.splice(event, 1);
    setReceta({
      ...receta,
      tratamientos: ArrayTratamientos,
    });
  };

  const generarReceta = (event: any) => {
    event.preventDefault();
    createReceta({ receta: receta });
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
          <Accordion defaultActiveKey="0" alwaysOpen={false}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Dato del paciente</Accordion.Header>
              <Accordion.Body>
                <Row className="justify-content-center">
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

                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellido Paterno</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apellido Paterno"
                        id="pacienteApellidoPaterno"
                        name="apellidoPaterno"
                        value={receta.apellidoPaterno}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellido Materno</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apellido Materno"
                        id="pacienteApellidoMaterno"
                        name="apellidoMaterno"
                        value={receta.apellidoMaterno}
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

                  <Col>
                    <Form.Group>
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
                    <Form.Group>
                      <Form.Label>Calle</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Calle"
                        id="calle"
                        name="calle"
                        value={receta.direccion.calle}
                        onChange={handleChangeDireccion}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={1}>
                    <Form.Group>
                      <Form.Label>MZ o NI</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MZ o NI"
                        id="MzoNi"
                        name="MzoNi"
                        value={receta.direccion.MzoNi}
                        onChange={handleChangeDireccion}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={1}>
                    <Form.Group>
                      <Form.Label>Lt o Net</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Lt o Ne"
                        id="LtoNe"
                        name="LtoNe"
                        value={receta.direccion.LtoNe}
                        onChange={handleChangeDireccion}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={2}>
                    <Form.Group>
                      <Form.Label>Colonia</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Colonia"
                        id="colonia"
                        name="colonia"
                        value={receta.direccion.colonia}
                        onChange={handleChangeDireccion}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={2}>
                    <Form.Group>
                      <Form.Label>C.P.</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="C.P."
                        id="codigoPostal"
                        name="codigoPostal"
                        value={receta.direccion.codigoPostal}
                        onChange={handleChangeDireccion}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={2}>
                    <Form.Group>
                      <Form.Label>Estado</Form.Label>
                      <Form.Select
                        id="estado"
                        name="estado"
                        value={receta.direccion.estado}
                        onChange={(event: any) => {
                          setReceta({
                            ...receta,
                            direccion: {
                              ...receta.direccion,
                              estado: event.target.value,
                            },
                          });
                        }}
                      >
                        <option value="">Estado</option>
                        {estadosMexico.map((estado: any) => (
                          <option key={estado.id} value={estado.value}>
                            {estado.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col sm={2}>
                    <Form.Group>
                      <Form.Label>Municipio</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Municipio"
                        id="municipio"
                        name="municipio"
                        value={receta.direccion.municipio}
                        onChange={handleChangeDireccion}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Signos Vitales</Accordion.Header>
              <Accordion.Body>
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
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Datos de la receta</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <header>
                    <p>Medicamentos a los que es alergico</p>
                  </header>
                  <div className="input-group mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Medicamentos a los que es alergico"
                      id="medicamentosAlergia"
                      name="medicamentoAlergia"
                      value={medicamentosAlergia.medicamentoAlergia}
                      onChange={handleChangeMedicamentosAlergia}
                    />
                    <div className="input-group-append">
                      <Button
                        className="btn"
                        id="enter"
                        type="button"
                        onClick={agregarMedicamentoAlergico}
                      >
                        Agregar
                      </Button>
                    </div>
                  </div>
                  <Col sm={12}>
                    <ListGroup>{listadoMedicamentosAlergia}</ListGroup>
                  </Col>
                </Row>

                <Row>
                  <div className="col-12">
                    <header>
                      <p>Tratamiento</p>
                    </header>
                    <div className="input-group mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Nombre del medicamento"
                        id="medicamento"
                        name="medicamento"
                        value={tratamientoObj.medicamento}
                        onChange={handleChangeTratamiento}
                      />
                      <Form.Control
                        type="text"
                        placeholder="Dosis"
                        id="dosis"
                        name="dosis"
                        value={tratamientoObj.dosis}
                        onChange={handleChangeTratamiento}
                      />
                      <Form.Control
                        type="text"
                        placeholder="Frecuencia"
                        id="frecuencia"
                        name="frecuencia"
                        value={tratamientoObj.frecuencia}
                        onChange={handleChangeTratamiento}
                      />
                      <Form.Control
                        type="text"
                        placeholder="Duracion"
                        id="duracion"
                        name="duracion"
                        value={tratamientoObj.duracion}
                        onChange={handleChangeTratamiento}
                      />
                      <Form.Control
                        type="text"
                        placeholder="Observaciones"
                        id="observaciones"
                        name="observaciones"
                        value={tratamientoObj.observaciones}
                        onChange={handleChangeTratamiento}
                      />
                      <div className="input-group-append">
                        <Button
                          className="btn"
                          id="enter"
                          type="button"
                          onClick={agregarTratamiento}
                        >
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Col sm={12}>
                    <ListGroup>{listadoTratamientoList}</ListGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-12">
                    <Form.Group className="mb-3">
                      <Form.Label>Indicaciones generales</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Recomendaciones generales"
                        id="recomendaciones"
                        name="recomendaciones"
                        value={receta.recomendaciones}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-12 text-center mb-4 mt-4">
                    <Button
                      variant="danger"
                      onClick={() => {
                        window.location.href = "/";
                      }}
                      className="m-3"
                    >
                      Ir al inicio
                    </Button>

                    <Button variant="primary" type="submit">
                      Generar receta
                    </Button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
    backgroundColor: colorConstants.ligth.verdeEsperanza,
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
