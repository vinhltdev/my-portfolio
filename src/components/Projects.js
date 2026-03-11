import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import data from "../data/portfolioData.json";

const imgMap = { projImg1, projImg2, projImg3 };
const { projects } = data;

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{projects.heading}</h2>
                <p>{projects.subtitle}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {projects.tabs.map((tab) => (
                      <Nav.Item key={tab.key}>
                        <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {projects.tabs.map((tab) => (
                      <Tab.Pane eventKey={tab.key} key={tab.key}>
                        <Row>
                          {(projects.items[tab.key] || []).map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={imgMap[project.imgKey] || projImg1}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
