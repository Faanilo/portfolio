import { Container } from "./styles";

export function Form() {
  
  return (
    <Container>
      <h2>Get in touch using the form below.</h2>
      <form
        action="https://getform.io/f/bec145ac-14cd-445b-bd24-5139a88174bb"
        method="POST"
        encType="multipart/form-data"
      >
        <input placeholder="Email" id="email" type="email" name="email" />
        <textarea placeholder="Enter text" id="message" name="message" />
        <button type="submit">
          Send
        </button>
      </form>
    </Container>
  );
}
