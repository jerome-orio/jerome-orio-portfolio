import Link from "next/link";
import Socials from "@/components/Socials";
import ProfilePicture from '@/components/ProfilePicture';
import SequentialTextAnimation from '@/components/SequentialTextAnimation';

const Home = () => {
  return (
    <>
      <div className="hero-content text-neutral-content text-center animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex my-4 items-center justify-center lg:order-2 sm:order-1">
            <svg className="absolute animate-circular will-change-transform" width="380" height="380">
              <circle cx="190" cy="190" r="160" fill="none" strokeWidth="4" stroke="#3498db" strokeDasharray="50, 5, 15" className="stroke-info animate-circularDash1 will-change-stroke-dashoffset" />
              <circle cx="190" cy="190" r="160" fill="none" strokeWidth="4" stroke="#3498db" strokeDasharray="5, 50" className="stroke-info animate-circularDash2 will-change-stroke-dashoffset" />
            </svg>
            <ProfilePicture width={304} height={304} className="relative rounded-full backdrop-filter backdrop-blur-md opacity-75" />
          </div>
          <div className="max-w-md py-4 my-4 lg:order-1 sm:order-2">
            <h1 className="text-4xl font-bold">Hello! I’m </h1>
            <h1 className="m-4 text-5xl font-extrabold text-info">
              <SequentialTextAnimation text="Jerome Orio" />
            </h1>
            <p className="mb-8">A software developer passionate about creating innovative solutions. This portfolio highlights my journey through coding, problem-solving, and collaboration.
              Feel free to explore my projects, and don’t hesitate to reach out if you’d like to connect!
            </p>
            <Link className="btn btn-primary" href={'/Jerome_Orio_Resume_2024.pdf'} target="_blank" rel="noopener noreferrer" locale={false} download>Download CV
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="animate-bounce w-6 h-6">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
            </Link>
            <Socials divClassName="flex gap-4 mt-8 justify-center" iconClassName="w-9 h-9 border border-info rounded-full flex justify-center items-center text-base text-info hover:text-primary duration-300" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;