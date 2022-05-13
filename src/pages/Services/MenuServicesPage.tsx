import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function MenuServicesPage() {
  return (
    <Container>
      <Col>
        <Row sm={12} className="text-center mt-5">
          <h1>Menu de Servicios</h1>
        </Row>
      </Col>

      <Col>
        <Row sm={12} className="text-center mt-5">
          <Button variant="primary" href="/services/medico/consulta-medica">
            Cotizacion
          </Button>
        </Row>
      </Col>
    </Container>
  );
}
