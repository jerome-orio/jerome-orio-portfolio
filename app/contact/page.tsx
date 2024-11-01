import Socials from '@/components/nav/Socials';
import { Form } from "./Form";
import { FaMapLocationDot, FaSquareEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="hero-overlay container mx-auto p-4 md:px-20 md:py-10 bg-opacity-45 animate-fadeIn">
      <div className="grid grid-cols-4 sm:grid-cols-12 gap-4 px-4">
        {/* Message Form */}
        <div className="card col-span-4 sm:col-span-8">
          <div className="card-body bg-base-300 shadow rounded-lg p-6 md:p-10">
            <h1 className="mb-5 text-4xl font-bold text-info text-center">Let’s Connect!</h1>
            <p className="mb-5 text-base-content text-center">I look forward to discussing potential opportunities. Please feel free to contact me!</p>
            <Form />
          </div>
        </div>
        {/* Contact Details */}
        <div className="card col-span-4 sm:col-span-4 flex flex-col justify-center gap-4">
          <div className="h-fit bg-base-300 shadow rounded-lg p-6">
            <div className="flex justify-center gap-2 items-center">
              <div className="text-info text-2xl md:text-4xl font-mono flex-shrink-0">
                <FaSquareEnvelope />
              </div>
              <h1 className="text-lg md:text-xl text-base-content whitespace-normal break-words">
                <Link className='link link-hover' href="mailto:jrorio.dev@zohomail.com">jrorio.dev@zohomail.com</Link>
              </h1>
            </div>
            <div className='flex justify-center gap-2 items-center'>
              <div className="text-info text-xl md:text-4xl font-mono flex-shrink-0">
                <FaMapLocationDot />
              </div>
              <h1 className="text-lg md:text-xl text-base-content whitespace-normal break-words">
                <Link className='link link-hover' href={'https://maps.app.goo.gl/5XSS8B6PznzCjQCVA'} target="_blank" rel="noopener noreferrer">Angeles City, Philippines</Link>
              </h1>
            </div>
            <Socials divClassName="flex gap-4 mt-2 justify-center" iconClassName="w-9 h-9 border border-info rounded-full flex justify-center items-center text-base text-info hover:text-primary hover:transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
