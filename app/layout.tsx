import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Favicon from './favicon.ico';
import Image from "next/image";
import Link from "next/link";
import profileImg from './/images/profile.jpg'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Niknokkk",
  description: "My personal portfolio.",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn text-base-content btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link className="font-bold text-base-content" href="/">Home</Link></li>
                <li><Link className="font-bold text-base-content" href="/">About Me</Link></li>
                <li><Link className="font-bold text-base-content" href="/">Projects</Link></li>
                <li><Link className="font-bold text-base-content" href="/">Contact Me</Link></li>
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl">Jerome Orio</a> */}
            <input type="checkbox" value="night" className="toggle theme-controller" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link className="font-bold text-base-content" href="/">Home</Link></li>
              <li><Link className="font-bold text-base-content" href="/">About Me</Link></li>
              <li><Link className="font-bold text-base-content" href="/">Projects</Link></li>
              <li><Link className="font-bold text-base-content" href="/">Contact Me</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle avatar">
                <div className="w-28 rounded-full">
                  <Image width={200} height={200} alt="Tailwind CSS Navbar component" src={profileImg} />
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                  <span className="text-lg font-bold text-base-content">Jerome Orio</span>
                  <span className="text-secondary">jerome.orio@gmail.com</span>
                  {/* <div className="card-actions">
                    <button className="btn btn-primary btn-block">Chat Me!</button>
                  </div> */}
                </div>
              </div>
            </div>

          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
