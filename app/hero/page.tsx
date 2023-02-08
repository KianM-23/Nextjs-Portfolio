"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-Typewriter";
import BackGroundCircle from "./BackGroundCircle";

type Props = {};

function page({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi my Name is Kian Murillo",
      "A Guy who loves sneakers",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="flex flex-col justify-center h-screen space-y-8 overflow-hidden text-center item-center ">
      <BackGroundCircle />
      <img
        className="relative object-cover w-64 h-64 mx-auto rounded-full bottom-[165px] shadow-2xl "
        src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/328022394_665711771910129_6130614106821698533_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Da7bcwuydzAAX_c0A4W&_nc_ht=scontent.fmnl3-2.fna&oh=03_AdRPne2ip63tSPvRW809biQFknQTbobBsIQq25FXhtjTGQ&oe=640A485F"
        alt=""
      />
      <div className="z-20">
        <h2 className="py-2 text-3xl tracking-[25px] text-gray-500 uppercase">
          React Developer
        </h2>
        <h1 className="px-20 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#90E4C1" />
        </h1>
        <div></div>
        <div className="pt-5">
          <Link href="/about">
            <button className="heroButton">about</button>
          </Link>
          <Link href="/techstuff">
            <button className="heroButton">tech stuff</button>
          </Link>
          <Link href="/portfolio">
            <button className="heroButton">projects</button>
          </Link>
          <Link href="/contact">
            <button className="heroButton">contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
