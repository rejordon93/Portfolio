"use client";
import GitHubCalendar from "react-github-calendar"; // Ensure ThemeInput is imported
import Image from "next/image";
import pre3 from "@/app/Assets/pre3.svg";
import {
  FaPaintBrush,
  FaCode,
  FaGithub,
  FaDatabase,
  FaPython,
  FaNodeJs,
  FaTools,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaMusic,
  FaBiking,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-purple-900 py-16">
      <div className="container mx-auto px-6 text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-purple-600">Me</span>
          </h1>
          <p className="text-xl text-gray-300">
            Hi, Im <span className="text-purple-600">Ethan Jordon</span> from{" "}
            <span className="text-purple-600">Seattle, WA.</span>
          </p>
        </div>

        {/* Flex container for text and image */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-16">
          {/* Left Column - Text */}
          <div className="text-lg max-w-xl">
            <p className="leading-relaxed mb-6">
              I am currently studying Computer Science full-time, and I also
              help mentor and teach students learning web development. Apart
              from coding, I love engaging in various activities that inspire
              creativity and personal growth.
            </p>

            {/* List of Activities */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                Activities I Enjoy:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaMusic className="mr-2 text-purple-600 text-2xl" />{" "}
                  <span>Playing Music</span>
                </li>
                <li className="flex items-center">
                  <FaBiking className="mr-2 text-purple-600 text-2xl" />{" "}
                  <span>Biking</span>
                </li>
                <li className="flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-purple-600 text-2xl" />{" "}
                  <span>Teaching Web Development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-shrink-0">
            <Image
              src={pre3}
              alt="Ethan Jordon's Avatar"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Professional Skillset */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Professional Skillset
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <FaJsSquare />, label: "JavaScript" },
              { icon: <FaReact />, label: "React" },
              { icon: <FaCode />, label: "TypeScript" },
              { icon: <FaDatabase />, label: "PostgreSQL" },
              { icon: <FaNodeJs />, label: "NodeJS" },
              { icon: <FaPython />, label: "Python" },
              { icon: <FaPython />, label: "Flask" },
              { icon: <FaPython />, label: "NextJS" },
              { icon: <FaGitAlt />, label: "Git" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="border-2 border-purple-400 rounded-lg p-6 flex items-center justify-center h-24 bg-white bg-opacity-5 transition-transform duration-300 hover:scale-105"
              >
                <span className="mr-2 text-purple-600 text-3xl">{icon}</span>
                <span className="text-xl">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools I Use */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-8 text-center">Tools I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <FaCode />, label: "VS Code" },
              { icon: <FaTools />, label: "Context API" },
              { icon: <FaGithub />, label: "Notion" },
              { icon: <FaDatabase />, label: "Redux" },
              { icon: <FaNodeJs />, label: "Tailwind" },
              { icon: <FaPython />, label: "Material UI" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="border-2 border-purple-400 rounded-lg p-6 flex items-center justify-center h-24 bg-white bg-opacity-5 transition-transform duration-300 hover:scale-105"
              >
                <span className="mr-2 text-purple-600 text-3xl">{icon}</span>
                <span className="text-xl">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Contributions Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Days I <span className="text-purple-600">Code</span>
          </h2>
          <div className="flex justify-center">
            <GitHubCalendar username="rejordon93" />
          </div>
        </div>
      </div>
    </div>
  );
}
