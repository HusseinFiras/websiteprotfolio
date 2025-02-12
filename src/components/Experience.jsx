import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isActive, onClick, isMobile }) => {
  // Subtle animation variants for the details section
  const detailsVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div
      onClick={onClick}
      className={`w-full cursor-pointer relative rounded-lg p-5 mb-4
        transition-all duration-300
        ${isActive ? 'bg-[#0a192f] border border-[#1af0dc]/20' : 'hover:bg-[#0a192f]/30'}`}
    >
      {/* Left border indicator */}
      <div className={`absolute left-0 top-0 h-full w-1 transition-all duration-300
        ${isActive ? 'bg-[#1af0dc] opacity-100' : 'bg-transparent opacity-0'}`} 
      />

      {/* Main content */}
      <div className="relative pl-4">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
          ${isActive ? "text-[#1af0dc]" : "text-white"}`}>
          {experience.title}
        </h3>
        
        <p className="text-md text-gray-400">
          {experience.company_name} | {experience.date}
        </p>

        {/* Mobile Details with AnimatePresence for smooth unmounting */}
        {isMobile && (
          <AnimatePresence>
            {isActive && (
              <motion.div
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-hidden"
              >
                <div className="mt-6 border-t border-[#1af0dc]/20 pt-4">
                  <ul className="space-y-4">
                    {experience.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-gray-300 text-sm leading-relaxed"
                      >
                        <div dangerouslySetInnerHTML={{ __html: detail }} />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="mt-5">
      <ul className="list-none space-y-6 rounded-xl p-8
        bg-[#0a192f]/30 border border-[#1af0dc]/20">
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="text-gray-300 text-lg leading-relaxed"
          >
            <div dangerouslySetInnerHTML={{ __html: detail }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleJobClick = (job) => {
    // Toggle selection: if clicking the same job, deselect it
    setSelectedJob(selectedJob === job ? null : job);
  };

  return (
    <div className="sm:my-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-transparent -z-10" />
      
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-16`}>
          Experience
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 px-4 md:p-20 flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-2/5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => handleJobClick(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        {!isMobile && (
          <div className="hidden lg:block flex-1">
            <ExperienceDetails experience={selectedJob || experiences[0]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");