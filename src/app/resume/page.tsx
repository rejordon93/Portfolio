import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-purple-900 flex items-center justify-center">
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 ">My Resume</h2>
        <p className="text-lg text-white mb-4">
          Download my CV to learn more about my skills and experience.
        </p>
        <a
          href="/path/to/your/cv.pdf" // Change this to the actual path of your CV file
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition duration-300"
          download // Optional attribute to trigger a file download
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
