import Socials from '@/components/Socials';
import { Form } from "./Form";
import { FaMapLocationDot, FaSquareEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div className="hero-overlay container mx-auto p-4 md:px-20 md:py-10 bg-opacity-45 animate-fadeIn">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-12 px-4">
          {/* Message Form */}
          <div className="card col-span-4 sm:col-span-8" >
            <div className="card-body bg-base-300 shadow rounded-lg p-10">
              <h1 className="mb-5 text-4xl font-bold text-info text-center">Let’s Connect!</h1>
              <p className="mb-5 text-base-content text-center">I look forward to discussing potential opportunities. Please feel free to contact me!</p>
              <Form />
            </div>
          </div>
          {/* Contact Details */}
          <div className="card col-span-4 sm:col-span-4 flex flex-col justify-center gap-4">
            <div className="h-fit bg-base-300 shadow rounded-lg p-10">
              <div className='text-start gap-2'>
                <span className="w-full flex items-center text-info text-4xl font-mono mb-2">
                  <FaSquareEnvelope />
                  <h1 className="ml-2 text-xl text-base-content">jrorio.dev@zohomail.com</h1>
                </span>
              </div>
              <div className='text-start gap-2'>
                <span className="w-full flex items-center text-info text-4xl font-mono mb-2">
                  <FaMapLocationDot />
                  <h1 className="ml-2 text-xl text-base-content"><Link className='link link-hover' href={'https://maps.app.goo.gl/5XSS8B6PznzCjQCVA'} target="_blank" rel="noopener noreferrer">Angeles City, Philippines</Link></h1>
                </span>
              </div>
              <Socials divClassName="flex gap-4 my-6 justify-center" iconClassName="w-9 h-9 border border-info rounded-full flex justify-center items-center text-base text-info hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Contact;