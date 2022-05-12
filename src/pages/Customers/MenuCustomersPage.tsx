import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function MenuCustomersPage() {
  return (
    <Container className="mt-4 mb-5">
      <Row className="justify-content-center col-12">
        <Col>
          <h1>Menu de Clientes</h1>
        </Col>
      </Row>

      <Row className="justify-content-center col-12">
        <Col>
          <Button variant="primary" href="/customers/socios">
            Crear Cliente
          </Button>
        </Col>

      </Row>
    </Container>
  );
}
