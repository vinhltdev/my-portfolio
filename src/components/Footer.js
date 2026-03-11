import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import data from "../data/portfolioData.json";

const { footer, socials } = data;

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
            </div>
            <p>{footer.copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
