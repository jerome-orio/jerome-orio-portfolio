import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-br from-purple-300 to-indigo-900 -mt-20">
        <div className="hero-overlay bg-opacity-45"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Welcome!</h1>
            <p className="mb-5">
              I’m Jerome Orio, a software developer passionate about creating innovative solutions. This portfolio highlights my journey through coding, problem-solving, and collaboration.
              Feel free to explore my projects, and don’t hesitate to reach out if you’d like to connect!
            </p>

            <Link className="btn btn-primary" href={'/Jerome_Orio_Resume_2024.pdf'} target="_blank" rel="noopener noreferrer" locale={false} download>Download CV
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="animate-bounce w-6 h-6">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;