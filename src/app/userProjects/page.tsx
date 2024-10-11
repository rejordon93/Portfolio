import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          MY RECENT{" "}
          <span className="text-white bg-purple-600 px-2 py-1 rounded">
            WORK
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          Here are some of my latest projects that showcase my skills and
          creativity.
        </p>
      </div>
    </div>
  );
}
