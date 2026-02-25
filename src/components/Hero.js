import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

import {
  FaLinkedinIn,
  FaGithub,
  
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-green-100 via-blue-100 to-blue-200 scroll-smooth">
      {/* LEFT TEXT CONTENT */}
      <div className="flex flex-col gap-5 max-w-xl animate-fadeInUp">
        <h1 className="text-2xl md:text-6xl font-bold text-gray-900 hover:text-blue-700 transition-colors duration-300 min-h-10">
          Hello, I&apos;m <span className="text-blue-900 min-h-14">Surendar</span>
        </h1>
        <h2 className="text-3xl font-bold text-blue-700 min-h-14">
          <Typewriter
            words={['Software Engineer', 'Frontend Developer', 'Python Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-gray-600 max-w-md text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300">
         Junior Software Engineer with experience building and maintaining production-level web applications using ReactJS and Django REST Framework. Worked on an internal HR Management System that was live for one year, handling frontend development, API integration, authentication flows, and role-based UI
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            <Link href="/contact">Hire Me</Link>
          </button>

          <Link
            href="SURENDAR-P Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-2 border-black px-8 py-3 rounded-lg flex items-center gap-2 font-semibold hover:bg-gray-100 hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Resume <FiDownload />
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-3xl mt-8 text-gray-800">
          <a
            href="https://github.com/surendarp05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transform transition-transform duration-300 hover:scale-125 hover:-translate-y-2 cursor-pointer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/surendarp05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transform transition-transform duration-300 hover:scale-125 hover:-translate-y-2 cursor-pointer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative mb-8 md:mb-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-6 border-gray-800 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-white group">
          <Image
            src="/surendar.png"
            alt="Surendar"
            width={280}
            height={280}
            priority
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
}
