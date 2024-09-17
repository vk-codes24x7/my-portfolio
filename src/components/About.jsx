import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="my-20 text-center text-4xl"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img className="rounded-2xl" src={aboutImg} alt="about" />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
