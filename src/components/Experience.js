import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";
import data from "../data/portfolioData.json";

const { experience } = data;

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{experience.heading}</h2>
                  <p className="experience-subtitle">{experience.subtitle}</p>
                  
                  <div className="timeline">
                    {experience.timeline.map((era, eraIndex) => (
                      <div className="timeline-era" key={eraIndex}>
                        <div className="timeline-era-header" style={{'--era-color': era.color}}>
                          <div className="era-badge">{era.era}</div>
                          <h3>{era.title}</h3>
                          <span className="era-role">{era.role}</span>
                        </div>
                        
                        <div className="timeline-items">
                          {era.items.map((item, itemIndex) => (
                            <div className="timeline-item" key={itemIndex} style={{'--era-color': era.color, '--item-delay': `${itemIndex * 0.1}s`}}>
                              <div className="timeline-dot" style={{background: era.color}}></div>
                              <div className="timeline-content">
                                <div className="timeline-meta">
                                  <span className="timeline-year">{item.year}</span>
                                  <span className="timeline-role-tag">{item.role}</span>
                                </div>
                                <h4>{item.project}</h4>
                                <p>{item.detail}</p>
                                <div className="tech-tags">
                                  {item.tech.split(' · ').map((tag, i) => (
                                    <span className="tech-tag" key={i} style={{borderColor: era.color}}>{tag}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
