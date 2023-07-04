import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Form() {
  const getformEndpoint = "https://app.getform.io/forms/50246";
  const recipientEmail = "faniloniainaa21@gmail.com";

  return (
    <Container>
      <h2>Get in touch using the form below.</h2>
      <ScrollAnimation animateIn="fadeInLeft">
        <form
          action={getformEndpoint}
          method="POST"
          encType="multipart/form-data"
        >
          <input placeholder="Email" id="email" type="email" name="email" />
          <textarea
            placeholder="Enter text"
            id="message"
            name="message"
          ></textarea>
          <input type="hidden" name="_subject" value="New form submission" />
          <input type="hidden" name="_replyto" value={recipientEmail} />
          <button type="submit">Send</button>
        </form>
      </ScrollAnimation>
    </Container>
  );
}
