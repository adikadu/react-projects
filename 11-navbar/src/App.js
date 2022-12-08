import classes from "./App.module.css";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <main>
      <nav>
        <a href="#">
          <img
            src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg"
            alt="logo"
            className={classes["logo"]}
          />
        </a>
        <ul className={classes["nav-links"]}>
          <li>
            <span>Home</span>
          </li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
        <ul className={classes["nav-socials"]}>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://behance.net/"
            >
              <FaBehance />
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default App;
