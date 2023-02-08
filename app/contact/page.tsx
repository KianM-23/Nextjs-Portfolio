import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function page({}: Props) {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-4xl">
        contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center ">
          I have just what you need
          <span className="px-2 underline decoration-teal-200">
            Lets Talk.{" "}
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-teal-200 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+64 433 321 4122</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-teal-200 h-7 w-7 animate-pulse" />
            <p className="text-2xl">king.kianmrllo@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-teal-200 h-7 w-7 animate-pulse" />
            <p className="text-2xl">dev street</p>
          </div>
        </div>

        <form className="flex flex-col mx-auto space-y-2 w-fit">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Messages" className="contactInput" />
          <button
            className="px-10 py-5 font-bold text-black rounded-md bg-teal-200/80"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
