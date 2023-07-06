import React from "react";
import styles from "./Skillset.module.css";
import { Tilt } from "react-tilt";

import MongoDB from '../../assets/mongodb.png';
import Cplus from '../../assets/C++.png';
import css from '../../assets/css.png';

import Javascript from '../../assets/js.png';
import Reactimg from '../../assets/react.png';
import Nodejs from '../../assets/nodejs.png';

import git from '../../assets/git.png';
import github from '../../assets/github.png';


import next from '../../assets/next.png';
import python from '../../assets/python.png';
import truffle from '../../assets/truffle.png';
import tailwind from '../../assets/tailwind.png';
import solidity from '../../assets/solidity.png';
import sql from '../../assets/sql.png';

const Skillset = () => {
  return (
    <>
    <div className={styles.skillsetmodule} id="skillset">
    <div className={styles.skillsetme}>
      <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
      Worked with the Latest Technologies & Tools used today in It Industry
      </p>
      <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Skillset
      </h2>
    </div>
    <div className={`${styles.skillset} ${styles.border}`}>
    <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Javascript} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Javascript</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Reactimg} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>React</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={python} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>python</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Cplus} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>C++</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={solidity} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>solidity</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={Nodejs} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>NodeJS</h3>
        </div>
      </Tilt>

     
      
    </div>
    <div className={`${styles.skillset} ${styles.border}`}>
      
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={MongoDB} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>MongoDB</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={next} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Next js</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={truffle} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Truffle</h3>
        </div>
      </Tilt>
    
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={css} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Css</h3>
        </div>
      </Tilt>

      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={tailwind} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>tailwind</h3>
        </div>
      </Tilt>

  
      
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={git} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Git</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={sql} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>Mysql</h3>
        </div>
      </Tilt>
      <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
        <div className={`${styles.card} ${styles.hoverEffect}`}>
          <div className="Tilt-inner">
            <img src={github} alt="HTML 5" width={100} className={styles.image} />
          </div>
          <h3 className={styles.title}>GitHub</h3>
        </div>
      </Tilt>
         </div>
    </div>
    </>
  );
};

export default Skillset;
