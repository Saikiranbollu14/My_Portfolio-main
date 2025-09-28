import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-10 px-4 sm:py-12 sm:px-6 bg-gray-900 text-white"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      <div className="w-full sm:w-5/6 md:w-3/4 bg-white text-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-indigo-900">
          About Me
        </h2>

        <p className="leading-relaxed text-base sm:text-lg text-center sm:text-left">
          I am a{" "}
          <span className="text-yellow-400 font-semibold">
            Frontend Developer
          </span>{" "}
          with a background in{" "}
          <span className="text-yellow-400 font-semibold">
            Electronics and Communication Engineering
          </span>
          . I am passionate about building{" "}
          <span className="text-yellow-400 font-semibold">
            responsive, user-friendly web applications
          </span>{" "}
          that merge performance with great design.
        </p>

        <p className="leading-relaxed text-base sm:text-lg mt-4 text-center sm:text-left">
          My expertise lies in{" "}
          <span className="text-yellow-400 font-semibold">React.js</span>,{" "}
          <span className="text-yellow-400 font-semibold">TypeScript</span>, and{" "}
          <span className="text-yellow-400 font-semibold">JavaScript</span>,
          with hands-on experience integrating{" "}
          <span className="text-yellow-400 font-semibold">.NET (C#)</span> and{" "}
          <span className="text-yellow-400 font-semibold">PostgreSQL</span> for
          building full-stack applications. I enjoy working in{" "}
          <span className="text-yellow-400 font-semibold">agile teams</span>,
          turning ideas into{" "}
          <span className="text-yellow-400 font-semibold">
            scalable digital solutions
          </span>
          .
        </p>

        <p className="leading-relaxed text-base sm:text-lg mt-4 text-center sm:text-left">
          With a strong foundation in{" "}
          <span className="text-yellow-400 font-semibold">
            modern web technologies
          </span>{" "}
          and a drive for continuous learning, I aim to craft{" "}
          <span className="text-yellow-400 font-semibold">
            impactful, intuitive experiences
          </span>{" "}
          that make technology more accessible and engaging.
        </p>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
    </section>
  );
};

export default About;
