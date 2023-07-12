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
      className="flex flex-col items-center h-screen px-10 mx-auto text-center lg:relative md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="lg:absolute lg:top-32 bottom-10 uppercase tracking-[20px] text-gray-500 lg:text-4xl text-2xl">
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
        src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/351779084_638161068334995_9143524420205683665_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH7GXdE3bdUT1Ns5InkSWJ2ihmvPe-R9eKKGa8975H14p6NGE4KFRuBJd-xjAs4NHfxLw7P-qzfpiWhRAN6YtAq&_nc_ohc=oztXYmTkI5QAX-Gaj1x&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfA5s65A6xDBGKwmbphTOrQ_-A9ICTCcmgJiuSXHBw0HYA&oe=64B3ECCD
        "
        className="bg-color-transparent -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] shadow-2xl"
      />

      <div className="px-0 space-y-6 lg:space-y-10 md:px-10">
        <h4 className="pt-12 text-3xl font-semibold lg:text-5xl lg:pt-0">
          Here is a
          <span className="px-2 underline decoration-teal-200">little</span>
          background
        </h4>
        <p className="text-xs lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages
        </p>
      </div>
    </motion.div>
  );
}

export default page;
