import React from "react";
import {  VerticalTimeline,   VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {  FaBriefcase as WorkIcon } from 'react-icons/fa';
import { FaSchool as SchoolIcon } from 'react-icons/fa';
import { FaCode as CodeIcon } from 'react-icons/fa';
import { FaUsers as GroupIcon } from 'react-icons/fa';

import './Timeline.css'

const Timeline = () => {
  return (
    <>
    <div id="work-experience">
    <div className="bg-primary">
      <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        Education and
      </p>
      <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Work Experience.
      </h2>
    </div>
    
    <VerticalTimeline>

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="May 2023 - present"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<GroupIcon />}
      >
        <h3 className="vertical-timeline-element-title">Complain registration on Block chain (DAPP)</h3>
        <h4 className="vertical-timeline-element-subtitle">Final Year Project</h4>
        <p>
       Builded a Complain registration DApp using Etherum blockchain (Decentralized Application) which provides enhanced security, 
       fosters decentralization, ensures immutability of records, and provides transparency and auditability. 
       <br/> These qualities make it a robust solution for maintaining a trustworthy and tamper-resistant system for registering and managing complaints.
        </p></VerticalTimelineElement>

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="1 June 2023 - present"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title">SSOC'23</h3>
        <h4 className="vertical-timeline-element-subtitle">Contributor</h4>
        <p>
        Social summer of code is a open source contribution program ,which has been an incredible experience that enriched my knowledge 
        and expanded my network in numerous ways.<br/><br/>
        Throughout the program, I had expanded my network, and
        contributed to meaningful projects that impact the broader developer ecosystem.
      
          </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="25 June 2024 - 25 July 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Data Science Intern at CodeSoft</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
        </p>
      </VerticalTimelineElement>  
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="6 April 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title">Vnps - Vcet </h3>
        <h4 className="vertical-timeline-element-subtitle">Vasai</h4>
        <p>
          Participated in VCET National level Project ShowCase Competition ,
          Our Project topic was Ai Image Generator
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="31 March 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title">HackStomp 5.0 - UCOE Hackathon</h3>
        <h4 className="vertical-timeline-element-subtitle">Thane , Maharashtra</h4>
        <p>
          Participated in 24 Hours Hackathon, and built a  farmming planner website on Block chain which help
farmer with all the quieries ,from buying a land
to predicting crops suitable for land type before hand , with security of transaction. <br/>
Also integrated and trained ai/ml models to predict the crop disease and fertilizer too.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="24 Sep 2022"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title">Code-o-fiesta - Vcet Hackathon</h3>
        <h4 className="vertical-timeline-element-subtitle">Vasai</h4>
        <p>
          Participated in 24hr Hackathon , Made a business ready social media website
for New Aspiring Enterpreneurs , to showcase their
businesses and products,<br/> Enabled B2B chat rooms ,to Grow Their Networks among peers and market their product on big scale.

          Our Project topic was Ai Image Generator
        </p>
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="2020 - present"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Vidyavardhini's College of Engineering and Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Vasai, Maharashtra</h4>
        <p>
        Pursuing Bachleor's of Technology in Computer Science with an aggregate of 8.7 CGPA , 2024 Batch
        </p>
      </VerticalTimelineElement> 
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="2018 - 2020"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Model College </h3>
        <h4 className="vertical-timeline-element-subtitle">Thakurli,Thane</h4>
        <p>
        Completed my senior secondary education in 2020.
        </p>
      </VerticalTimelineElement> 
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="2014 - 2018"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">St. Mary's High School </h3>
        <h4 className="vertical-timeline-element-subtitle">Kalyan,Thane</h4>
        <p>
        Completed my secondary education in 2018.
        </p>
      </VerticalTimelineElement> 

      {/* <VerticalTimelineElement
        iconStyle={{ background: "lightgray", color: "#fff" }}
        icon={<FaSalesforce />}
      /> */}
    </VerticalTimeline>
    </div>
    </>
  );
};

export default Timeline;
