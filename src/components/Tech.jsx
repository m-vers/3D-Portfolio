import React from "react";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Skills & Technologies</p>
      <br/>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h4 className="ml-5">{technology.name}</h4>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");