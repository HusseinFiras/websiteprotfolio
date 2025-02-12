import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Search, Terminal, Globe, Settings,ShieldAlert,BarChart2,CircleDollarSign,Brackets, Code, Github, Mail, Linkedin } from 'lucide-react';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const PortfolioCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 flex flex-col items-center"
  >
    <div className="w-16 h-16 flex items-center justify-center mb-4">
      <Icon className="w-12 h-12" style={{ color: '#1af0dc' }} />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2 text-center">{title}</h3>
    <p className="text-gray-300 text-center text-sm lg:text-xs xl:text-sm">
      {description}
    </p>
  </motion.div>
);

const GithubSection = () => {
  const [githubUserData, setGithubUserData] = useState({});

  useEffect(() => {
    async function fetchGithubStats() {
      const response = await fetch("https://api.github.com/users/HusseinFiras");
      const json = await response.json();
      setGithubUserData(json);
    }
    fetchGithubStats();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 pt-32 px-4">
      {/* Left GitHub Card */}
      <motion.div 
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="lg:w-1/4 w-full"
      >
        <div className="bg-[#0f0f0f] rounded-lg overflow-hidden relative" style={{ borderColor: '#1af0dc', borderWidth: '1px' }}>
          {/* Header Background */}
          <div className="h-36 w-full" style={{ backgroundColor: '#4bc5c0' }}/>
          
          {/* Profile Image */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-[#0f0f0f]" 
                 style={{ borderColor: '#4bc5c0', borderWidth: '4px' }}>
              <img 
                src={githubUserData?.avatar_url} 
                alt={githubUserData?.name || "Profile"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pt-20 pb-4 text-center">
            <h3 className="text-xl font-bold text-white mb-1">
              {githubUserData?.name}
            </h3>
            <a 
              href={githubUserData?.html_url}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:underline"
            >
              @{githubUserData?.login}
            </a>

            {/* Tags */}
            <div className="flex items-center justify-center gap-2 my-4">
              <span className="bg-gray-800 px-2 py-1 rounded text-sm text-white flex items-center gap-1">
                
              👔Tech Sales
              </span>
              <span className="bg-gray-800 px-2 py-1 rounded text-sm text-white flex items-center gap-1">
              🤖Automation Enthusiast
              </span>
            </div>

            {/* GitHub Stats */}
            <div className="bg-[#1a1a1a] rounded-lg p-4 mx-4 mb-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-white font-bold">{githubUserData?.followers}</p>
                  <span className="text-gray-400 text-sm">followers</span>
                </div>
                <div>
                  <p className="text-white font-bold">{githubUserData?.following}</p>
                  <span className="text-gray-400 text-sm">following</span>
                </div>
                <div>
                  <p className="text-white font-bold">{githubUserData?.public_repos}</p>
                  <span className="text-gray-400 text-sm">repos</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-4">
              <a href={githubUserData?.html_url} target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#1af0dc' }} className="hover:opacity-80">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:hussenfiras342@gmail.com" 
                 style={{ color: '#1af0dc' }} className="hover:opacity-80">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hussein-firas/" style={{ color: '#1af0dc' }} className="hover:opacity-80">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://app.hackthebox.com/users/1995444" style={{ color: '#1af0dc' }} className="hover:opacity-80">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9959.0008a1.053 1.053 0 00-.4497.1082L2.5126 4.7074a1.0533 1.0533 0 00-.5502.9252v12.7348a1.0533 1.0533 0 00.5502.9252l9.0336 4.5984a1.0533 1.0533 0 00.9252 0l9.0336-4.5984a1.0533 1.0533 0 00.5502-.9252V5.6326a1.0533 1.0533 0 00-.5502-.9252L12.4456.1082A1.053 1.053 0 0011.9959 0zm.004 3.1934l7.0777 3.5976-2.9687 1.5116-7.0777-3.5977zm-7.0777 4.9395l7.0777 3.5976v7.1953l-7.0777-3.5977zm14.1554 0v7.1952l-7.0777 3.5977v-7.1953z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div 
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        className="lg:w-3/4 w-full"
      >
        <h1 className="text-3xl font-bold mb-6" style={{ color: '#4bc5c0' }}>WHO AM I?</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>
          By day, I dive into tech sales and Microsoft solutions by night, I'm just a guy with a guitar, a half-decent voice, and questionable song choices..
          </p>
          
          <p>
          I talk about Microsoft like I own shares in it, but I’m from Al Diwaniya where if a cloud shows up, we call it a national emergency and take the day off. The city’s so empty, if you open Google Maps, it just says “bro, just guess.” When I’m not deep in tech talk or music, I’m probably procrastinating with a long binge-watching session of some series I swore I’d watch "casually" only to emerge hours later questioning my life choices.
          </p>
          
          <p>
          Beyond the jokes, I actually know my stuff when it comes to tech sales, cloud solutions, and automation. I specialize in helping businesses navigate Microsoft products, from licensing to deployment, making sure they get the right tools without the headache. I’ve also got a solid grasp of Google Apps Script and automation, building scripts that cut down repetitive work (sometimes a little too well). Whether it’s solving IT problems, optimizing workflows, or just making tech easier for people, I enjoy finding the smartest way to get things done. And if there's a way to automate something instead of doing it manually, you can bet I’ll figure it out.
          </p>

          <a 
            href="/Hussein_Firas_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 text-white font-bold py-2 px-6 rounded transition-colors"
            style={{ backgroundColor: '#00776a' }}
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const services = [
    {
      icon: ShieldAlert,
      title: "Cybersecurity & Network Security",
      description: "Proficient in OWASP Top 10, penetration testing, and ethical hacking, with hands-on experience in HTB, PortSwigger Academy, and custom security tools for detecting malicious URLs."
    },
    {
      icon: BarChart2,
      title: "Data Analysis & Business Intelligence",
      description: "Skilled in Google Sheets, Excel, and custom dashboards for data-driven decision-making. Experience handling large datasets (15,000+ entries) with data validation and automation."
    },
    {
      icon: Globe,
      title: "Cloud Computing & Microsoft Azure",
      description: "Expanding expertise in Microsoft Azure and Microsoft 365 cloud solutions. Working on Azure fundamentals and cloud security best practices for enterprise solutions."
    },
    {
      icon: CircleDollarSign,
      title: "Technical Sales & Microsoft Solutions",
      description: "Skilled in technical sales, specializing in Microsoft solutions, cloud technologies, and IT infrastructure to drive business growth."
    },
    {
      icon: Brackets,
      title: "Web & Software Development",
      description: "Proficient in JavaScript,   C++, Python, PHP, HTML, CSS for building web applications and software solutions."
    }
  ];

  return (
    <div className='container mx-auto mt-[-250px] xs:mt-[-200px] sm:mt-0'> {/* Added negative margin for mobile */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}></h2>
      </motion.div>

      <div className="flex flex-wrap justify-center items-start -mx-4">
        {services.map((service, index) => (
          <PortfolioCard
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <GithubSection />
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");