import Link from 'next/link';

const experience = [
  {
    id: 'exp1',
    position: 'Software Engineer',
    companyLink: 'https://www.kyndryl.com/us/en',
    companyName: 'Kyndryl',
    project: 'Project: Kyndryl Bridge - Security Operations as a Platform',
    projectDuration: 'November 2023 - September 2024',
    tasks: [
      'Engineered a microservice front-end web component for Kyndryl Bridge, improving user interaction and functionality.',
      'Designed data visualization components that enhanced user understanding of key metrics, leading to a 20% increase in user engagement.',
      'Integrated Elasticsearch and Kibana Dashboards, facilitating real-time data analysis and reporting.',
    ],
    techStack: [
      'Svelte', 'Vite', 'RESTful API', 'Spring Boot', 'Java', 'Elasticsearch', 'Kibana'
    ]
  },
  {
    id: 'exp2',
    position: 'Software Engineer',
    companyLink: 'https://www.kyndryl.com/us/en',
    companyName: 'Kyndryl',
    project: 'Project: Unified Resiliency Platform - Backup as a Service',
    projectDuration: 'November 2021 - October 2023',
    tasks: [
      'Implemented a microservices architecture that improved system scalability, reducing downtime by 30%.',
      'Developed front-end components for the Unified Resiliency Platform, streamlining user workflows and enhancing system performance.',
    ],
    techStack: [
      'React', 'React Hooks', 'RESTful API', 'Express.js', 'Node.js', 'IBM Cloudant / CouchDB'
    ]
  },
  {
    id: 'exp3',
    position: 'Software Engineer',
    companyLink: 'https://www.ibm.com/consulting/business-continuity',
    companyName: 'IBM - Business Continuity Resiliency Services',
    project: 'Projects: IBM SmartCloud Managed Backup Portal, IBM SmartCloud Data Recovery, and IBM Client Connect Portal (Angular & React)',
    projectDuration: 'June 2012 - October 2021',
    tasks: [
      'Created robust client-side architecture for single-page applications, increasing application load speed by 25%.',
      'Designed responsive web applications using HTML, CSS, jQuery, Angular, and React, ensuring a seamless user experience across devices.',
    ],
    techStack: [
      'React', 'Redux', 'Express.js', 'Angular.js,', 'RESTful API', 'Node.js', 'Java (J2EE)', 'Spring Framework', 'Oracle', 'IBM Cloudant / CouchDB'
    ]
  },
  {
    id: 'exp4',
    position: 'Java Developer (J2EE)',
    companyLink: 'https://cpi.com.ph',
    companyName: 'Computer Professionals Inc.',
    project: 'Project: GeniiSys WEB (General Insurance Information System)',
    projectDuration: 'January 2010 - May 2012',
    tasks: [
      'Transformed client software to a web version using Java and Oracle, enhancing accessibility for end-users.',
      'Conducted database modifications and provided online support, improving client satisfaction by resolving issues swiftly.',
    ],
    techStack: [
      'Java', 'Servlets', 'Spring Framework', 'Oracle', 'iBatis', 'Tomcat', 'HTML', 'CSS', 'JavaScript'
    ]
  },
  {
    id: 'exp5',
    position: 'Oracle Developer',
    companyLink: 'https://cpi.com.ph',
    companyName: 'Computer Professionals Inc.',
    project: 'GeniiSys Oracle (General Insurance Information System)',
    projectDuration: 'July 2008 - December 2009',
    tasks: [
      'Developed and debugged Oracle database objects and system modules, optimizing performance and functionality.',
      'Implemented enhancements that improved system efficiency, resulting in a 15% reduction in processing time for user queries.',
    ],
    techStack: [
      'Oracle Forms 6i', 'Oracle Reports 6i', 'PL / SQL', 'Oracle 10g', 'TOAD'
    ]
  }
];

const page = {
  label: 'Experience',
  desc: 'Seasoned professional with over 15 years of experience at Computer Professionals Inc., specializing in delivering innovative solutions for a diverse range of clients through multiple projects. Demonstrated expertise in understanding client requirements, collaborating effectively with cross-functional teams, and executing projects that enhance client satisfaction and drive business growth. Committed to leveraging a strong analytical skill set and industry knowledge to deliver exceptional results and foster lasting client relationships.',
};

const Experience = () => {
  return (
    <section className="animate-fadeIn">
      <header>
        <h2 className="text-2xl text-info font-extrabold">{page.label}</h2>
        <p className="text-base-content my-2 whitespace-pre-line">{page.desc}</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        {experience.map((item) => (
          <article key={item.id} className="flex flex-col bg-base-200 rounded-box py-6 px-5 mt-4">
            <h3 className="text-primary text-xl font-bold mb-2">
              {item.position} @ <Link className="link link-hover" href={item.companyLink} target="_blank" rel="noopener noreferrer">{item.companyName}</Link>
            </h3>
            <p className="text-base-content font-bold">{item.project}</p>
            <p className="text-slate-500 text-sm mt-0">
              <i>{item.projectDuration}</i>
            </p>
            <div className="text-slate-500 text-sm">
              <ul className="list-disc list-outside ml-4">
                {item.tasks.map((task, index) => (
                  <li key={index} className="text-base-content text-sm">{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-start mt-4 gap-2">
                {item.techStack.map((tech, index) => (
                  <span key={index} className="badge badge-info badge-outline">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
