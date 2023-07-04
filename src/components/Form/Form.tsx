import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

export function Form() {
  const getformEndpoint = "https://app.getform.io/forms/50246"; // Update the endpoint URL
  const recipientEmail = "faniloniainaa21@gmail.com"; // Update with desired recipient email

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    try {
      await axios.post(getformEndpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Email submitted successfully!");
      event.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting email. Please try again later.");
    }
  };

  return (
    <Container>
      <h2>Get in touch using the form below.</h2>
      <ScrollAnimation animateIn="fadeInLeft">
        <form onSubmit={handleSubmit}>
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
