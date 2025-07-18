"use client";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-90vw justify-center items-center"
      >
        <UserCircleIcon className="w-24 h-24 text-gray-400 rounded-full mt-16 mb-4" />
        <div className="flex flex-col justify-center items-center w-full h-full max-w-4xl p-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold self-center mt-0 text-gray-400 flex">
            {"Hi, I'm Akash"} <span className="">👋</span>
          </h1>
          <h2 className="flex flex-col text-2xl sm:text-3xl md:text-4xl font-semibold self-center mt-4 m-2">
            <span className="bg-gradient-to-r flex justify-center items-center from-blue-500 to-teal-500 text-transparent bg-clip-text">
              Front end web developer
            </span>
            <span className="self-start text-base sm:text-lg md:text-xl">
              from bangalore
            </span>
            <span className="self-start text-base sm:text-lg md:text-xl">
              india
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-4 text-center">
            I am a front-end web developer with a passion for creating beautiful
            and functional user interfaces. I love working with React, Next.js,
            and Tailwind CSS to build modern web applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
}