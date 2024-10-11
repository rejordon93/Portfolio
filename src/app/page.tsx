import Image from "next/image"; // Ensure this import is included for the Image component
import Link from "next/link"; // Ensure this import is added for Link
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import icons from React Icons
import prv2 from "@/app/Assets/pre2.svg"; // Import your image

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden min-w-[320px] max-w-[1800px] mx-auto ">
      <div className="relative z-10 p-6 text-white flex flex-col items-center justify-center text-center space-y-4 mt-16">
        <h1 className="text-5xl font-extrabold">LET ME INTRODUCE MYSELF</h1>
        <p className="max-w-3xl text-lg leading-relaxed">
          I have always been intrigued by the possibilities of programming and
          artificial intelligence.
        </p>
        <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-3xl mt-6">
          {/* Text Section */}
          <div className="text-left mb-10 space-y-6 md:mr-8">
            <p className="text-lg leading-relaxed">
              I am fluent in classics like{" "}
              <span className="text-purple-600 font-semibold">Python</span> and{" "}
              <span className="text-purple-600 font-semibold">JavaScript</span>.
            </p>
            <p className="text-lg leading-relaxed">
              My field of interest in development is in{" "}
              <span className="text-purple-600 font-semibold">
                Neural Network Architecture Design, ML Performance, GPU
                Programming, Synthetic Data Generation, and Blockchain
                technology.
              </span>
            </p>
            <p className="text-lg leading-relaxed">
              Whenever possible, I also apply my passion for developing websites
              with{" "}
              <span className="text-purple-600 font-semibold">Node.js</span> and{" "}
              <span className="text-purple-600 font-semibold">React.js</span>.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-4 md:mt-0 md:ml-16 w-full flex justify-center">
            <div className="w-[300px] h-[300px]">
              <Image src={prv2} alt="Your Image" width={300} height={300} />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-8">FIND ME ON</h1>
        <h3 className="mt-2 text-lg">
          Feel free to{" "}
          <Link href="/github" className="text-purple-400 hover:underline">
            connect
          </Link>{" "}
          with me
        </h3>
        <div className="flex space-x-6 mt-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center bg-purple-600 p-3 rounded-full transition-transform duration-300 hover:scale-110">
              <FaGithub className="text-white" size={24} />
            </div>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center bg-purple-600 p-3 rounded-full transition-transform duration-300 hover:scale-110">
              <FaTwitter className="text-white" size={24} />
            </div>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center bg-purple-600 p-3 rounded-full transition-transform duration-300 hover:scale-110">
              <FaLinkedin className="text-white" size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
