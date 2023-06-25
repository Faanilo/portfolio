import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            My name is Fanilo Niaina, I'm a junior developer with a great
            passion for programming. I am passionate about delivering solutions
            that add value to people's lives and at the same time challenge me.
            Improved my skills as a Front-End and Back-End developer
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I am passionate about server-side development using Node/Express Js,
            I'm always improving myself with each project they put in my hands.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated person who pursues to make his dreams come true,
            hardworking and results oriented, I always seek to achieve my best
            version.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="" alt="image-prf" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
