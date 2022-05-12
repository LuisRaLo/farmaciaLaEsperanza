import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { validationForm } from "../../hooks/validationForm";
import { StringsHelper } from "../../utils/helpers/StringsHelper";
import { ICustomer } from "../../utils/interfaces/ICustomer";

const AltasScreen = () => {
  const [customer, setCustomer] = useState<ICustomer>({
    curp: "",
  });

  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError("");
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validate: Array<string> = validationForm(customer);

    if (validate) {
      setError(validate.join(", "));
    } else {
      setError("");
    }
  };

  const handleChange = (e: any) => {
    setError("");
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className="mt-5">
      <Col className="text-center">
        <Row>
          <h1>Alta de socios</h1>
        </Row>
      </Col>

      <Col className="text-center">
        <Row>
          <h2>
            <span className="badge badge-primary">
              <i className="fas fa-user-plus"></i>
            </span>
          </h2>
        </Row>
      </Col>

      <Col
        className="col-12 justify-content-center"
        style={styles.sectionContainer}
      >
        <Form>
          <Row sm={12}>
            <Form.Group controlId="CURP" className="col-9">
              <Form.Label>CURP</Form.Label>
              <Form.Control
                type="text"
                placeholder="CURP"
                className="text-center"
                onChange={handleChange}
                name="curp"
                maxLength={18}
                minLength={18}
              />
            </Form.Group>

            <div className="col-3 mt-3">
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                className="col-12 mt-3"
              >
                Comprobar
              </Button>
            </div>
          </Row>

          <Row sm={12}>
            <span className="text-danger">
              <i className="fas fa-exclamation-circle"></i>
              <small>
                <strong>{error}</strong>
              </small>
            </span>
          </Row>
        </Form>
      </Col>
    </Container>
  );
};

const styles = {
  sectionContainer: {
    padding: "20px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px #ccc",
  },
};

export default AltasScreen;
