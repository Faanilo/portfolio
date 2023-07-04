import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import ScrollAnimation from "react-animate-on-scroll";

export function Contact() {
  return (
    <Container id="contact">
      <ScrollAnimation animateIn="fadeInRight">
        <header>
          <h2>Contact Me</h2>
          <p>
            If you saw my potential or want to talk to me, don't hesitate to
            send me a message.
          </p>
        </header>
        <div className="contacts">
          <div>
            <img src={emailIcon} alt="Email" />
            <a href="mailto:faniloniainaa21@gmail.com">
              faniloniainaa21@gmail.com
            </a>
          </div>
          <div>
            <img src={phoneIcon} alt="Phone" />
            <a href="tel:+261327379128">(+261) 327379128</a>
          </div>
        </div>
      </ScrollAnimation>
      <Form></Form>
    </Container>
  );
}
