import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from 'lucide-react';

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const InputField = ({ icon: Icon, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <label className="text-[#1af0dc] font-medium mb-2 block">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300
          ${isFocused ? 'text-[#1af0dc]' : 'text-gray-400'}`}>
          <Icon size={20} />
        </div>
        {props.type !== 'textarea' ? (
          <input
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-[#0a192f] pl-12 pr-4 py-4 rounded-lg
              border transition-all duration-300
              ${isFocused ? 'border-[#1af0dc] shadow-[0_0_10px_rgba(26,240,220,0.3)]' : 'border-gray-700'}
              focus:outline-none text-white`}
          />
        ) : (
          <textarea
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-[#0a192f] pl-12 pr-4 py-4 rounded-lg
              border transition-all duration-300 min-h-[200px]
              ${isFocused ? 'border-[#1af0dc] shadow-[0_0_10px_rgba(26,240,220,0.3)]' : 'border-gray-700'}
              focus:outline-none text-white resize-none`}
          />
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-transparent -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: {
              opacity: 1,
              y: 0,
              transition: { type: "tween", duration: 1, delay: 0.2 },
            },
          }}
        >
          <h2 className={`${styles.sectionText} text-center mb-16`}>
            Contact
          </h2>

          {/* Contact form card */}
          <motion.div
            className="bg-[#0a192f]/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12
              border border-[#1af0dc]/20 shadow-[0_0_30px_rgba(26,240,220,0.1)]"
          >
            <form
              action="https://getform.io/f/bkkkowmb"
              method="POST"
              className="space-y-8"
            >
              <InputField
                icon={User}
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
              />
              
              <InputField
                icon={Mail}
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              
              <InputField
                icon={MessageSquare}
                label="Message"
                type="textarea"
                name="message"
                placeholder="Enter your message"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group relative px-8 py-3 bg-[#1af0dc]/10 rounded-lg
                    border border-[#1af0dc]/50 text-[#1af0dc] font-medium
                    hover:bg-[#1af0dc]/20 transition-all duration-300
                    shadow-[0_0_10px_rgba(26,240,220,0.2)]
                    hover:shadow-[0_0_15px_rgba(26,240,220,0.3)]"
                >
                  <span className="flex items-center gap-2">
                    {loading ? "Sending..." : (
                      <>
                        Send Message
                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");