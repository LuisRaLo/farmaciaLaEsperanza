import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function CotizacionPage() {
  const [estudio, setEstudio] = useState<string>("");
  const [results, setResults] = useState<Array<any>>([]);

  const tryData = async () => {
    try {
      const url: string = "http://localhost/farmapp/v1/laboratorio/estudios";

      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_estudio: estudio,
        }),
      });

      const json = await data.json();

      return setResults(json);
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    setEstudio(e.target.value);

    if (estudio.length > 1) {
      return tryData();
    }
    return setResults([]);
  };

  return (
    <Container>
      <Col>
        <Row sm={12} className="text-center mt-5">
          <h1>Cotizacion</h1>
        </Row>
      </Col>

      <Col>
        <Row sm={12} className="text-center mt-5">
          <Form>
            <Form.Group controlId="estudio_txt">
              <Form.Label>A continuacion ingrese el nombre del estudio</Form.Label>
              <Form.Control
                type="text"
                placeholder="6 elementos ..."
                onChange={handleOnChange}
                className="text-center mt-3"
              />
              <Form.Text className="text-muted">
                Digite el nombre del estudio de laboratorio que desea cotizar.
              </Form.Text>
            </Form.Group>
          </Form>
        </Row>
      </Col>

      <Col>
        <Row sm={12} className="text-center mt-5">
          {results.length > 0 && (
            <div>
              <h3>Resultados</h3>
              <div>
                {results.map((result: any) => (
                  <div key={result.idEstudio} style={styles.cardContainer}>
                    <div style={styles.cardHeader}>
                      <h5>{result.nombre}</h5>
                    </div>
                    <div style={styles.cardBody}>
                      <p>
                        <b>Muestra Biológica:</b> {result.muestraBiologica}
                      </p>
                      <p>
                        <b>Entrega:</b> {result.entrega}
                      </p>

                      <p>
                        <b>Precio Venta:</b> $ {result.precioVenta}
                      </p>

                      <p>
                        <b>Precio Compra:</b> $ {result.precioCompra}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Row>
      </Col>
    </Container>
  );
}

const styles = {
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    margin: 10,
    border: "1px solid #ccc",
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardFooter: {
    fontSize: 12,
    fontWeight: "bold",
  },

  cardBody: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 12,
    fontWeight: "bold",
  },
};
