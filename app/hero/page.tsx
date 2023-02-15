"use client";
import Link from "next/link";
import React from "react";
import BackGroundCircle from "./BackGroundCircle";
import Typewriter from "typewriter-effect";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center ">
      <BackGroundCircle />
      <img
        className="relative object-cover w-64 h-64 mx-auto rounded-full lg:bottom-[165px] bottom-[100px] shadow-2xl "
        src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/328022394_665711771910129_6130614106821698533_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Da7bcwuydzAAX_c0A4W&_nc_ht=scontent.fmnl3-2.fna&oh=03_AdRPne2ip63tSPvRW809biQFknQTbobBsIQq25FXhtjTGQ&oe=640A485F"
        alt=""
      />
      <div className="z-20">
        <h2 className="py-2 lg:text-3xl text-xl tracking-[25px] text-gray-500 uppercase">
          React Developer
        </h2>
        <h1 className="text-xl font-semibold lg:px-20 lg:text-6xl">
          <Typewriter
            options={{
              strings: ["Hi I'm Kian Murillo"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div></div>
        <div className=" lg:pt-5">
          <Link href="/about">
            <button className="heroButton">
              <p className="text-xs lg:text-base">about</p>
            </button>
          </Link>
          <Link href="/techstuff">
            <button className="heroButton">
              <p className="text-xs lg:text-base">Technology</p>
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="heroButton">
              <p className="text-xs lg:text-base">projects</p>
            </button>
          </Link>
          <Link href="/contact">
            <button className="heroButton">
              <p className="text-xs lg:text-base">contact</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
