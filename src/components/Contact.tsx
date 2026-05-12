import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/babburi-soumith"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — babburi-soumith
              </a>
            </p>
            <p>
              <a
                href="mailto:babburi17@gmail.com"
                data-cursor="disable"
              >
                babburi17@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.S. Bioinformatics, Indiana University, Indianapolis — 2022–2024
            </p>
            <p>
              B.S. Pharmacy, Gitam University, India — 2017–2021
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/soumithbabburi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/babburi-soumith"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:babburi17@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Soumith Sai Babburi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
