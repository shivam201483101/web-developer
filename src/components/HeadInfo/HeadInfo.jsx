import React, { useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStaylinked,
  FaTelegram,
} from "react-icons/fa";
import {SiCodechef, SiLeetcode} from "react-icons/si";
import { ReactTerminal } from "react-terminal";
import { Link, useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Resume.pdf";
import "./HeadInfo.css";

const HeadInfo = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  const handleSkillsetClick = (event) => {
    event.preventDefault();
    const skillsetElement = document.getElementById("skillset");

    if (skillsetElement) {
      skillsetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkExperienceClick = (event) => {
    event.preventDefault();
    const handleWorkExperience = document.getElementById("work-experience");

    if (handleWorkExperience) {
      handleWorkExperience.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = (event) => {
    event.preventDefault();
    const handleProject = document.getElementById("project-info");

    if (handleProject) {
      handleProject.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const welcomeMessage = (
    <span>
      Welcome to the terminal!
      <br />
      <br />
      Get started by typing <strong style={{ color: "#00abfe" }}>
        help
      </strong>{" "}
      command below . . .
      <br />
      <br />
    </span>
  );

  const errorMessageStyling = {
    color: "red",
    marginTop: "5px",
  };

  const promptStyling = {
    color: "#00abfe",
  };

  const textColor = {
    color: "var(--text-color)",
  };

  const buttonColor = {
    color: "var(--button-color)",
  };

  const theme = {
    background: "black",
    promptSymbolColor: "#00abfe",
    commandColor: "#00abfe",
    outputColor: "var(--text-color)",
    errorOutputColor: "red",
    fontSize: "1rem",
    spacing: "2%",
    fontFamily: "Courier New, monospace",
    width: "100%",
    height: "100%",
  };

  const commands = {
    help: () => {
      return (
        <div style={{ marginTop: "10px", color: "#ffeeee" }}>
          <p style={textColor}>Available Commands:</p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>start: </span>
            <span style={textColor}>get started</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>whatiknow: </span>
            <span style={textColor}>tells about my tech knowledge</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>clear: </span>
            <span style={textColor}>clears out everything on the terminal</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>aboutme: </span>
            <span style={textColor}>tells you about me</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>projects: </span>
            <span style={textColor}>displays my projects</span>
          </p>
          <p style={{ marginTop: "10px", marginLeft: "15px" }}>
            <span style={buttonColor}>chat: </span>
            <span style={textColor}>get my telegram username.
            <br/>You can try typing my name "shivam" <br/><br/> Happy Coding..!
            </span>
          </p>
        </div>
      );
    },

    start: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ marginTop: "10px", color: "var(--text-color)" }}>
            Hey, I am Shivam Pandey! Student at{" "}
            <a href="https://vcet.edu.in/" style={buttonColor}>
              Vcet
            </a>
            , vasai.
            <br />
            <br /> Explore more, start by typing "hey".
          </span>
        </p>
      );
    },

    shivam: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ marginTop: "10px", color: "var(--text-color)" }}>
            Yay! You got the hidden command. I am Shivam Pandey<br /> <br />{" "}
           long way to go ..
           <br/><br/> The only thing constant in life is Changes <br/>
           ---Const variable in Javascript
           
          </span>
        </p>
      );
    },

    hey: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ marginTop: "10px", color: "var(--text-color)" }}>
            Hey!! How are youu?{" "}
            <br/>want to know more then type "aboutme"
          </span>
        </p>
      );
    },

    aboutme: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)", marginTop: "5px" }}>
            I am Shivam Pandey , Done my Btech CSE from{" "}
            <a href="https://mumoa.digitaluniversity.ac/" style={buttonColor}>
              Mumbai university ,
            </a>
            2024 batch<br /> <br />
            Skilled MERN Developer and block chain developer ,looking for opportunities to show and apply my problem solving skills and latest tech knowledge.
          </span>
        </p>
      );
    },

    chat: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)", marginTop: "5px" }}>
            Let's connect and chat on telegram, Here's my username:@Shivampandey2903           
          </span>
        </p>
      );
    },

    whatiknow: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)", lineHeight: "35px" }}>
            Experienced in Full stack development, with{" "}
            <span style={buttonColor}>&nbsp;React.js</span> and its frameworks
            in the front-end part, and <span style={buttonColor}>Node.js</span>{" "}
            in the back-end.
          </span>
        </p>
      );
    },

    projects: () => {
      return (
        <p style={{ marginTop: "10px" }}>
          <span style={{ color: "var(--text-color)" }}>
            Here are some of my projects:
            <br />
            <br />
            - Project 1: Algorithm Visualizer
            <br />
            <br />
            - Project 2: Crypto Exchange Platform (Dapp)
            <br />
            <br />- Project 3: Fir Registration using Blockchain(Dapp)
            <br />
            <br />- Project 4: MicroJob Marketplace
            <br />
            <br />- Project 5: Exercise suggestor website
            <br />
            <br />- Project 6: Crop disease prediction

            <br /> <br /> Get more project details in Projects section
            {/* Add more project details */}
          </span>
        </p>
      );
    },
  };

  const isActive = location.pathname !== "/";

  return (
    <div className="App">
      <header className={`header ${showContent ? "transition" : ""}`}>
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <FaStaylinked></FaStaylinked>hivam.
        </Link>
        <div
          className={`hamburger-menu ${isActive ? "active" : ""}`}
          onClick={() => window.location.replace("/")}
        ></div>
        <nav className={`navbar ${isActive ? "show" : ""}`}>
          <Link to="/" className="logo" onClick={handleLogoClick}>
            Home
          </Link>
          <Link to="/" onClick={handleSkillsetClick}>
            Skillset
          </Link>
          <Link to="/" onClick={handleWorkExperienceClick}>
            Work Experience
          </Link>
          <Link to="/" onClick={handleProjectClick}>
            Projects
          </Link>
          <Link to="https://linktr.ee/shivam2903">Let's Connect</Link>
        </nav>
      </header>
      <div class="content">
  <h1 class="title">Hi, I'm Shivam Pandey
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1></div>
      <section className="home">
        <div className="home-content">
       
          <h3>
            <Typewriter
              options={{
                strings: [
                  "MERN Developer",
                  "Block Chain Developer","Competitive programmer",
                  "Data Science",
                  "Open Source Contributor",
                  "Learner",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <p>
            Skilled MERN Developer, looking for opportunities to show and create
            unique applications. Interested in Designing, working on creative
            Ideas, and using modern technology. <br /> <br /> I am well-versed
in developing complex web applications that are both functional
and aesthetically pleasing. With my technical expertise, creativity,
and commitment to learning, I am confident in my ability to succeed
in any development role.<br/><h2><br/>
Explore the terminal you may find some new
            commands!.</h2>
          </p>
          <div className="btn-box">
            <Link
              to="https://www.linkedin.com/in/shivam-pandey-a99296213/"
              className="hire-button"
              style={{ width: "60%" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Talk
            </Link>
            <a
              href={Resume}
              className="talk-button"
              style={{
                display: "flex",
                backgroundColor: "rgb(6, 143, 208)",
                color: "white",
                justifyContent: "space-around",
                width: "60%",
                textDecoration: "none",
              }}
              download="Resume.pdf"
            >
              Resume <FaDownload />
            </a>
          </div>
        </div>
        <div className="right-side">
          <div
            style={{ width: "100%", height: "400px", border: "2px solid #fff" }}
          >
            <ReactTerminal
              prompt={<span style={promptStyling}>$ shivam &gt;&gt;</span>}
              commands={commands}
              welcomeMessage={<span style={textColor}>{welcomeMessage}</span>}
              errorMessage={
                <span style={errorMessageStyling}>Command not found!</span>
              }
              inputColor="var(--text-color)"
              outputColor="var(--text-color)"
              backgroundColor="var(--background-color)"
              theme={theme}
            />
          </div>
        </div>
        <div className="home-sci">
          <a
            href="https://www.linkedin.com/in/shivam-pandey-a99296213/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shivam201483101"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/shivam_.2915?igshid=zguzmzm3nwjioq=="
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/+XnYVyy58nNtkMTg1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.hackerrank.com/shivampandey2903"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SiCodechef/>
          </a>
          <a
            href="https://www.leetcode.com/shivam_2903"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SiLeetcode />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeadInfo;
