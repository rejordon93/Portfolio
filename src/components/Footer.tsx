import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import social icons

export default function Footer() {
  return (
    <footer className="text-white bg-black py-3 mt-auto">
      <div className="container mx-auto flex items-center justify-between">
        {" "}
        {/* Flex for horizontal alignment */}
        <p className="text-lg">
          Designed and Developed by{" "}
          <span className="font-semibold">Ethan Jordon</span>
        </p>
        <p className="text-sm text-center">Copyright © 2024 Elliot Arledge</p>
        <ul className="flex space-x-6">
          {" "}
          {/* Space between icons */}
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-white hover:text-purple-400 transition duration-200"
                size={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-white hover:text-purple-400 transition duration-200"
                size={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-white hover:text-purple-400 transition duration-200"
                size={24}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
