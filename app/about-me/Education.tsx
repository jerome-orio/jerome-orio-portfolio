import Link from 'next/link';

const education = [
  { id: 'edu1', year: '2009', title: 'Java EE Bootcamp', desc: 'HTML, CSS, JavaScript, Java, Servlets, Spring Framework, iBatis, Oracle', link: { href: 'https://cpi.com.ph', label: 'Computer Professionals Inc.' } },
  { id: 'edu2', year: '2009', title: 'Jasper Reports Bootcamp', desc: 'v.3.7.2', link: { href: 'https://cpi.com.ph', label: 'Computer Professionals Inc.' } },
  { id: 'edu3', year: '2009', title: 'Database Administrator Bootcamp', desc: 'Oracle 10g', link: { href: 'https://cpi.com.ph', label: 'Computer Professionals Inc.' } },
  { id: 'edu4', year: '2009', title: 'Oracle Certification Bootcamp', desc: 'PL/SQL, Forms Developer 6i', link: { href: 'https://cpi.com.ph', label: 'Computer Professionals Inc.' } },
  { id: 'edu5', year: '2008', title: 'Oracle Bootcamp', desc: 'SQL, PL/SQL, Forms & Reports 6i', link: { href: 'https://cpi.com.ph', label: 'Computer Professionals Inc.' } },
  { id: 'edu6', year: '2008', title: 'Bachelor of Science in Computer Science', link: { href: 'https://neu.edu.ph/', label: 'New Era University, Quezon City, PHL' } },
]

const page = {
  label: 'Education',
  desc: 'I graduated with a Bachelor of Science in Computer Science from New Era University in Quezon City, Philippines, in 2008.'
}

const Education = () => {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl text-info font-extrabold">{page.label}</h2>
      <p className="text-base-content my-2 whitespace-pre-line">{page.desc}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {
          education.map((item, index) => {
            return (
              <div key={index} className="flex flex-col bg-base-200 rounded-box py-6 px-5 mt-4">
                <p className="text-primary text-xl font-bold mb-2">
                  {item.year}
                </p>
                <p className="text-base-content font-bold">
                  {item.title}
                </p>
                {item.desc && <p className="text-slate-500 text-sm mt-0">
                  <i>{item.desc}</i>
                </p>}
                <p className="text-slate-500 text-sm">
                  <Link className="link link-hover" href={item.link.href} target="_blank">{item.link.label}</Link>
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Education;