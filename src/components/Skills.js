import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import data from "../data/portfolioData.json";

const { skills } = data;

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{skills.heading}</h2>
                        <p>{skills.subtitle.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>)}</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
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
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
