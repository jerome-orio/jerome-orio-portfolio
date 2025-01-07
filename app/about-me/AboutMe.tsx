import Link from "next/link";
import { FaIdBadge } from "react-icons/fa6";

const certifications = [
  {
    id: "cert1",
    year: "2009",
    title: "Oracle Certified Professional",
    desc: "OCP - Forms Developer",
    issuer: "Oracle Corporation",
  },
  {
    id: "cert2",
    year: "2009",
    title: "Oracle Certified Associate",
    desc: "PL/SQL",
    issuer: "Oracle Corporation",
  },
];

const page = {
  label: "About Me",
  desc:
    "I am a software developer with over 15 years of experience in creating and maintaining software solutions that help businesses run more efficiently. I enjoy working with teams to solve problems and deliver high-quality projects, even in fast-paced environments.\n\n" +
    "Beyond my professional pursuits, I am an avid learner who enjoys exploring new technologies through various channels, including YouTube tutorials and online courses. This commitment to self-improvement helps me stay current with industry trends and enhances my skill set. \n\n" +
    "I’m passionate about what I do and always ready to tackle new challenges.",
};

const AboutMe = () => {
  return (
    <section className="animate-fadeIn">
      <header>
        <h2 className="text-2xl text-info font-extrabold">{page.label}</h2>
        <p className="text-base-content my-2 whitespace-pre-line">
          {page.desc}
        </p>
      </header>

      <article className="flex flex-col bg-base-200 rounded-box py-6 px-5 mt-4">
        <span className="flex items-center text-secondary text-xl font-bold mb-2">
          <FaIdBadge />
          <h2 className="text-xl text-secondary font-extrabold ml-1">
            Work History
          </h2>
        </span>
        <div className="mb-2">
          <div className="flex justify-between flex-wrap gap-2 w-full">
            <span className="text-base-content font-bold">
              <Link
                className="link link-hover"
                href="https://cpi.com.ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                Computer Professionals Inc.
              </Link>
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-0">
            <i>June 2008 - December 2024</i>
          </p>
          <p className="text-slate-500 text-sm">Senior Software Developer</p>
        </div>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {certifications.map((item) => (
          <article
            key={item.id}
            className="flex flex-col bg-base-200 rounded-box py-6 px-5 mt-4"
          >
            <p className="text-primary text-xl font-bold mb-2">{item.year}</p>
            <p className="text-base-content font-bold">{item.title}</p>
            {item.desc && (
              <p className="text-slate-500 text-sm mt-0">
                <i>{item.desc}</i>
              </p>
            )}
            <p className="text-slate-500 text-sm">{item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
