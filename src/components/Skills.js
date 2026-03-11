import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import data from "../data/portfolioData.json";

const { skills } = data;

export const Skills = () => {

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{skills.heading}</h2>
                        <p>{skills.subtitle.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>)}</p>
                        <div className="skills-grid">
                            {skills.items.map((skill, index) => (
                              <div className="item" key={index}>
                                <div className="skill-icon-circle">
                                  <span className="skill-emoji">{skill.icon}</span>
                                  <svg className="skill-progress-ring" viewBox="0 0 120 120">
                                    <circle className="skill-ring-bg" cx="60" cy="60" r="54" />
                                    <circle 
                                      className="skill-ring-fill" 
                                      cx="60" cy="60" r="54" 
                                      style={{
                                        strokeDasharray: `${2 * Math.PI * 54}`,
                                        strokeDashoffset: `${2 * Math.PI * 54 * (1 - skill.level / 100)}`
                                      }}
                                    />
                                  </svg>
                                </div>
                                <h5>{skill.name}</h5>
                                <span className="skill-group">{skill.group}</span>
                                <span className="skill-level">{skill.level}%</span>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
