import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center 
        transition-all duration-300 hover:bg-[#0a192f]/30 rounded-lg
        ${isActive ? 'scale-[1.02]' : 'scale-100'}
        ${isMobile ? "text-quaternary" : ""}`}
      whileHover={{ x: isMobile ? 0 : 10 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glowing line for active state */}
      {(isActive || isMobile) && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '80%' }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-[10%] w-1 sm:w-2
            bg-gradient-to-b from-[#1af0dc] via-[#1af0dc]/50 to-transparent
            rounded-full blur-[2px] sm:block hidden"
        />
      )}

      {/* Main content */}
      <div className={`relative ${isActive ? 'pl-3 sm:pl-6' : 'pl-3'}`}>
        <h3
          className={`text-xl lg:text-2xl xl:text-3xl font-bold mb-2
            transition-colors duration-300
            ${isActive || isMobile ? "text-[#1af0dc]" : "text-slate-600"}`}
        >
          {experience.title}
        </h3>
        <p
          className={`text-md lg:text-lg xl:text-2xl transition-colors duration-300
            ${isActive || isMobile ? "text-white/80" : "text-slate-600"}`}
        >
          {experience.company_name} | {experience.date}
        </p>
      </div>

      {/* Background glow effect for active state */}
      {isActive && (
        <div className="absolute inset-0 -z-10 bg-[#1af0dc]/5 rounded-lg blur-xl" />
      )}
    </motion.div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-5"
    >
      <motion.ul 
        className="max-w-7xl list-none space-y-8 rounded-xl lg:rounded-3xl p-8
          bg-[#0a192f]/30 backdrop-blur-sm
          border border-[#1af0dc]/20 shadow-[0_0_15px_rgba(26,240,220,0.1)]"
      >
        {experience.details.map((detail, index) => (
          <motion.li
            key={`experience-detail-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative pl-6 text-slate-300 font-medium 
              text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px]
              leading-relaxed"
          >
            {/* Glowing dot */}
            <div className="absolute left-0 top-[0.7em] w-2 h-2 rounded-full 
              bg-[#1af0dc]/30 shadow-[0_0_5px_#1af0dc]" />
            <div dangerouslySetInnerHTML={{ __html: detail }} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sm:my-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-transparent -z-10" />
      
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-16`}>
          Experience
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start gap-10">
        <div className="flex flex-col z-10 sm:w-auto w-full max-w-xl">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden flex-1">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");