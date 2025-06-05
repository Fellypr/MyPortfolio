import "./App.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { TbBrandGithub } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <body>
      <header id="Header">
        <nav>
          <ul>
            <li>
              <a href="#AboutMe">About me</a>
            </li>
            <li>
              <a href="#skills">Skills e Tools</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="AboutMe">
        <div className="InformationAboutMe">
          <h1>Hi, I'm Fellype, I'm a Web Developer Full Stack</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim
            omnis voluptas tempore at commodi dolorem ea nobis debitis iure
            repellendus quidem laboriosam, id vitae a dolore dolores aliquam.
            Quos!
          </p>
        </div>
        <picture>
          <img
            src="src/img/animal-2029983__340.webp"
            width={200}
            alt="Foto de Perfil"
          />
        </picture>
      </section>

      <section id="skills">
        <h1 className="Title" data-aos="flip-left">
          My Skills && Tools
        </h1>
        <div className="SkillsTools" data-aos="fade-up">
          <div className="ProgrammingLanguages">
            <p>Programming Languages</p>
            <div className="LanguagesContainer" data-aos="zoom-in">
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>

          <div className="ProgrammingLanguages" data-aos="fade-up">
            <p>Tools</p>
            <div className="LanguagesContainer" data-aos="zoom-in">
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  width={70}
                  height={70}
                />
              </div>
              <div className="Languages">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Project">
        <h1 className="Title" data-aos="fade-up">
          My Main Projects
        </h1>
        <div className="ProjectsContainer" data-aos="fade-up">
          <div className="ProjectsCard">
            <picture>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p>Project 1</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perspiciatis tempore quaerat eligendi molestiae iste ex
              repellendus, dignissimos mollitia harum, voluptatibus sequi
              similique reiciendis nulla! Esse debitis dignissimos omnis. Sed!
            </p>
            <button>More</button>
          </div>

          <div className="ProjectsCard" data-aos="fade-up">
            <picture>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p>Project 1</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perspiciatis tempore quaerat eligendi molestiae iste ex
              repellendus, dignissimos mollitia harum, voluptatibus sequi
              similique reiciendis nulla! Esse debitis dignissimos omnis. Sed!
            </p>
            <button>More</button>
          </div>

          <div className="ProjectsCard">
            <picture>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt=""
                width={100}
                height={100}
              />
            </picture>
            <p>Project 1</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perspiciatis tempore quaerat eligendi molestiae iste ex
              repellendus, dignissimos mollitia harum, voluptatibus sequi
              similique reiciendis nulla! Esse debitis dignissimos omnis. Sed!
            </p>
            <button>More</button>
          </div>
        </div>
      </section>
      <section id="Education">
        <h1 className="TitleEducation" data-aos="fade-up">
          My Education
        </h1>
        <div className="EduicationContainer">
          <div className="EduicationCard" data-aos="fade-up">
            <p>2022</p>
            <button></button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              repudiandae soluta voluptatum enim odio nemo, provident dicta
              inventore unde quasi officiis, autem, necessitatibus atque! Illo
              nihil aliquid ducimus consectetur atque!
            </p>
          </div>
          <div className="EduicationCard" data-aos="fade-up">
            <p>2023</p>
            <button></button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              repudiandae soluta voluptatum enim odio nemo, provident dicta
              inventore unde quasi officiis, autem, necessitatibus atque! Illo
              nihil aliquid ducimus consectetur atque!
            </p>
          </div>
          <div className="EduicationCard" data-aos="fade-up">
            <p>2024</p>
            <button></button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              repudiandae soluta voluptatum enim odio nemo, provident dicta
              inventore unde quasi officiis, autem, necessitatibus atque! Illo
              nihil aliquid ducimus consectetur atque!
            </p>
          </div>
          <div className="EduicationCard" data-aos="fade-up">
            <p>2025</p>
            <button></button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              repudiandae soluta voluptatum enim odio nemo, provident dicta
              inventore unde quasi officiis, autem, necessitatibus atque! Illo
              nihil aliquid ducimus consectetur atque!
            </p>
          </div>
        </div>
      </section>

      <footer id="Contact">
        <div className="ContactContainer">
          <h1>Contact Me</h1>
          <p>
            In my career as a beginner developer, I always try to improve my
            skills, putting into practice what I have learned in concrete
            projects and evolving together with the team, with commitment and a
            great desire to learn more.
          </p>
          <div className="ContactIcons">
            <a href="https://github.com/Fellypr" target="_blank">
              <TbBrandGithub size={40} />
            </a>
            <a href="https://www.instagram.com/fellype_emiliano/" target="_blank">
              <FaInstagramSquare size={40} />
            </a>
            <a href="https://www.linkedin.com/in/fellype-kenned-05bb94319/" target="_blank">
              <CiLinkedin size={40} />

            </a>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
