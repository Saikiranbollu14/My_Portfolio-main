import React from "react";
import Photo from "../assets/Kiran.png";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-4 sm:px-6 bg-gray-900 text-white"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-400">Bollu Sai Kiran</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
          A passionate{" "}
          <span className="text-yellow-400 font-bold">Frontend Developer</span>{" "}
          with experience in building{" "}
          <span className="text-yellow-400 font-bold">
            scalable web applications
          </span>{" "}
          using <span className="text-yellow-400 font-bold">React.js</span>,{" "}
          <span className="text-yellow-400 font-bold">TypeScript</span>,{" "}
          <span className="text-yellow-400 font-bold">.NET (C#)</span>, and{" "}
          <span className="text-yellow-400 font-bold">PostgreSQL</span>. I
          specialize in creating{" "}
          <span className="text-yellow-400 font-bold">
            intuitive, user-friendly interfaces
          </span>{" "}
          with strong attention to performance and design.
        </p>

        {/* Social Links */}
        <div className="flex gap-3 sm:gap-4 mb-6">
          <a
            href="https://x.com/Saikiran1141?t=bVUBtoGfHr9pZvEnhveV6Q&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/sai_kiran_bollu_?igsh=bzNsbXNoMTF1Z2Mw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/bollu-sai-kiran-579789251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Saikiranbollu14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>

        {/* CV Button */}
        <a
          href="https://portfolio-main-zr97.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          View Resume
        </a>
      </div>

      {/* Right Content - Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 relative">
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-80 md:h-80 rounded-full border-4 border-transparent neon-ring animate-spin"></div>
        <img
          src={Photo}
          alt="Bollu Sai Kiran"
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
