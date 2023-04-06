import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>About Me</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn ("", "", 0.1, 1)}
    className='mt-4 text-white-100 text-[17px] max-w-3xl leading-30[px]'>I am a proactive and results oriented self-taught web developer. I have a keen interest in emerging technologies, and key strengths in HTML, CSS, JavaScript, and React. <br/><br/>In addition to my professional qualifications, I have also recently completed the ‘Front End Developer Course’ with Codecademy, and I use my free time to refine these skills wherever I can. In parallel, I have proactively sought projects where I can utilise my computer knowledge whilst developing new skills in Front End frameworks and gain Back End experience. <br/><br/>I am now looking for a Junior Web Developer position, where I can continue to learn, develop, and add value to a team.</motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about')