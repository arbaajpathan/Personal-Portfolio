import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Updated import for WhatsApp
import logo from "../assets/logo1.webp";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              className="mx-2"
              width={180}
              height={250}
              alt="logo"
            />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/arbaajpathan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/918625835488" // WhatsApp API link with your number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
