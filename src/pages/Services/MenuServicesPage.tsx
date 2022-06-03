import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Breadcrumbs,
  Button,
  CardActionArea,
  CardActions,
  Link,
} from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";

import animation1 from "../../utils/lotties/100854-doctor-prescription.json";
import animation2 from "../../utils/lotties/82910-psychotherapy.json";
import Lottie from "react-lottie";

export default function MenuServicesPage() {
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
    <Container>
      <Row className="justify-content-md-center m-5">
        <Col>
          <h1>Servicios</h1>
        </Col>

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Inicio
          </Link>
          <Typography color="text.primary">servicios</Typography>
        </Breadcrumbs>
      </Row>

      <Row>
        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Lottie options={lottie1Options} height={200} width={220} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Consulta Médica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Consulta médica general a través de nuestra aplicación
                </Typography>
              </CardContent>
              <CardActions>
                <Row sm={12}>
                  <Col className="text-center">
                    <Button
                      size="small"
                      color="primary"
                      href="/services/medico/consulta-medica"
                    >
                      Afiliados
                    </Button>
                  </Col>
                  <Col className="text-right">
                    <Button
                      size="small"
                      color="primary"
                      href="/services/medico/consulta-medica"
                    >
                      Público
                    </Button>
                  </Col>
                </Row>
              </CardActions>
            </CardActionArea>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Lottie options={lottie2Options} height={200} width={220} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Consulta Psicológica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Consulta psicológica a través de nuestra aplicación
                </Typography>
              </CardContent>
              <CardActions>
                <Row sm={12}>
                  <Col className="text-center">
                    <Button
                      size="small"
                      color="primary"
                      href="/services/medico/consulta-psicologica"
                    >
                      Afiliados
                    </Button>
                  </Col>
                  <Col className="text-right">
                    <Button
                      size="small"
                      color="primary"
                      href="/services/medico/consulta-psicologica"
                    >
                      Público
                    </Button>
                  </Col>
                </Row>
              </CardActions>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
