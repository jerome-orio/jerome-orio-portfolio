import Image from "next/image";
import Link from "next/link";
import profileImg from './/images/profile.jpg'

export default function Home() {
  return (
    <main>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Niknokkk</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle avatar">
              <div className="w-28 rounded-full">
                <Image width={200} height={200} alt="Tailwind CSS Navbar component" src={profileImg} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className="p-2"><Link href="/">Projects</Link></li>
              <li className="p-2"><Link href="/">About Me</Link></li>
              <li className="p-2"><Link href="/">Contact Me</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="bg-black p-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600">Niknokkk
          </div>
          <div className="lg:flex lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            <Link href="/" className="text-white  px-4 py-2 hover:text-orange-600 ">Home</Link>
            <Link href="/" className="text-white  px-4 py-2  hover:text-orange-600">Projects</Link>
            <Link href="/" className="text-white  px-4 py-2  hover:text-orange-600">About</Link>
            <Link href="/" className="text-white  px-4 py-2  hover:text-orange-600">Contact Me</Link>
          </div>
        </div>
      </nav> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
            <p className="mb-5">
              I’m Jerome Orio, a software developer passionate about creating innovative solutions. This portfolio highlights my journey through coding, problem-solving, and collaboration.
              Feel free to explore my projects, and don’t hesitate to reach out if you’d like to connect!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
