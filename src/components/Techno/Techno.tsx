import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import HTML from "../../assets/html-icon.svg";
import "./techno.css";
import CSS from "../../assets/css-icon.svg";
import JS from "../../assets/js-icon.svg";
import TS from "../../assets/typescript-icon.svg";
import REACT from "../../assets/react-icon.svg";
import NODE from "../../assets/node-icon.svg";
import MONGO from "../../assets/mongo.png";
import EXPRESS from '../../assets/express.png'
export function Techno() {
  return (
    <Container id="techno">
      <h2>What I can do ? </h2>
      <div className="technos">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <div className="techno">
            <img src={HTML} id="skills" alt="html"/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="techno">
            <img src={CSS} id="skills" alt="css"/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="techno">
            <img src={JS} id="skills" alt="js"/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="techno">
            <img src={TS} id="skills" alt="ts"/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
          <div className="techno">
            <img src={MONGO} id="skills" alt="mongo"/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="techno">
            <img src={EXPRESS} id="skills" alt="express" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="techno">
            <img src={REACT} id="skills" alt="react" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <div className="techno">
            <img src={NODE} id="skills" alt="node"/>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
