"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function page({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-4xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        // viewport={{ once: true }}
        src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/318659683_444184727927501_8711413285597634465_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2_IOy70Mv2gAX9HM1SD&_nc_ht=scontent.fmnl3-4.fna&oh=03_AdTvePwu4ALekOXo2L4WsEHQuZiSPKJ1XcjLEdN7ZvQ2QQ&oe=640B2AB2"
        className="bg-color-transparent -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] shadow-2xl"
      />

      <div className="px-0 space-y-10 md:px-10 ">
        <h4 className="text-5xl font-semibold ">
          Here is a
          <span className="px-2 underline decoration-teal-200">little</span>
          background
        </h4>
        <p className="text-base ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </motion.div>
  );
}

export default page;
