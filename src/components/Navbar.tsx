"use client"; // Enables client-side rendering for this component
import React, { useState, useEffect } from "react";
import pre from "../app/Assets/pre.svg"; // Ensure the path is correct
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(true);

  // Timer to control loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Image
            src={pre}
            alt="Loading animation"
            width={100}
            height={100}
            className="animate-spin"
          />
        </div>
      ) : (
        <div className="flex justify-between items-center p-4 text-white">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-purple-600">
              <Link href="/">EJ</Link>
            </h1>
          </div>
          <ul className="flex space-x-6">
            <li className="relative group">
              <Link
                href="/"
                className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                aria-label="Home"
              >
                <FaHome className="mr-1" /> Home
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </li>
            <li className="relative group">
              <Link
                href="/about"
                className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                aria-label="About"
              >
                <FaInfoCircle className="mr-1" /> About
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </li>
            <li className="relative group">
              <Link
                href="/userProjects"
                className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                aria-label="Projects"
              >
                <FaProjectDiagram className="mr-1" /> Projects
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </li>
            <li className="relative group">
              <Link
                href="/resume"
                className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                aria-label="Resume"
              >
                <FaFileAlt className="mr-1" /> Resume
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </li>
            <li className="flex items-center relative group">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="mr-1 transform transition-transform duration-300 hover:scale-110" />
                GitHub
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
