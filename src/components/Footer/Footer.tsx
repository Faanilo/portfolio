import {Container} from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer(){
  return(
    <Container className="footer">
      <a href="/" className="logo">
        <span>Fa</span>
        <span>nilo</span>
      </a>
      <div>
        <p>THANK YOU</p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/faniloniaina-ramilison-156014240/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/Faanilo" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a href="https://www.instagram.com/faarm___/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://discord.com/users/524516932364271616" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
      
    </Container>
  )
}