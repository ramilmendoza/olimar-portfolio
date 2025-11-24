import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

InputField.displayName = 'InputField';

const Contact = () => {

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)} 
        className="flex-[0.75] bg-gradient-to-br from-black-100 via-black-100 to-blue-900/10 p-12 rounded-3xl border border-blue-500/20 shadow-2xl shadow-blue-500/10"
      >
        <motion.p 
          className={`${styles.sectionSubText} text-blue-400 tracking-widest`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in touch
        </motion.p>
        
        <motion.h3 
          className={`${styles.sectionHeadText} mt-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact Me
        </motion.h3>

        <motion.div 
          className="mt-12 flex flex-col gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-300/50 transition-all duration-300">
              <p className="text-sm font-semibold text-blue-300 mb-3 tracking-widest uppercase">Email Address</p>
              <a 
                href="mailto:rp007mendoza@gmail.com" 
                className="text-2xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent hover:from-cyan-100 hover:to-white transition-all duration-300"
              >
                rp007mendoza@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent rounded-full"></div>
        </motion.div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
