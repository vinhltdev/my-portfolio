import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import data from "../data/portfolioData.json";
const { footer } = data;

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>{footer.copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
