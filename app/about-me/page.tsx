import React from "react";
import ProfilePicture from '@/components/ProfilePicture'
import Link from "next/link";

const AboutMePage = () => {
    return (
        <>
            <div className="hero min-h-screen bg-gradient-to-br from-purple-300 to-indigo-900">
                <div className="hero-overlay container mx-auto py-6 bg-opacity-45">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="card col-span-4 sm:col-span-3">
                            <div className="card-body bg-base-100 shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <div className="avatar mb-4">
                                        <div className="ring-secondary ring-offset-base-100 w-32 h-32 rounded-full ring ring-offset-4">
                                            <ProfilePicture />
                                        </div>
                                    </div>

                                    <h1 className="text-2xl font-extrabold text-base-content">Jerome Orio</h1>
                                    <p className="text-md font-semibold text-secondary">Software Developer</p>
                                </div>
                                <div className="bg-base-300 rounded-box flex flex-wrap py-6 px-5 mt-4">
                                    <span className="w-full flex items-center text-secondary text-xl font-bold mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-1">Skills</span>
                                    </span>
                                    <div className="badge badge-accent p-3 m-1">JavaScript</div>
                                    <div className="badge badge-info p-3 m-1">React</div>
                                    <div className="badge badge-success p-3 m-1">Node.js</div>
                                    <div className="badge badge-secondary p-3 m-1">HTML/CSS</div>
                                    <div className="badge badge-neutral p-3 m-1">Next.js</div>
                                    <div className="badge badge-error p-3 m-1">Tailwind CSS</div>
                                    <div className="badge badge-primary p-3 m-1">TypeScript</div>
                                    <div className="badge badge-accent badge-outline p-3 m-1">Java</div>
                                    <div className="badge badge-warning p-3 m-1">Angular</div>
                                    <div className="badge badge-primary badge-outline p-3 m-1">Svelte</div>
                                </div>
                                <div className="bg-base-300 rounded-box flex flex-wrap py-6 px-5 mt-4">
                                    <span className="w-full flex items-center text-secondary text-xl font-bold mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-1">Education</span>
                                    </span>
                                    <span>
                                        <p className="text-base-content font-bold">
                                            BS in Computer Science
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            <Link href={"https://neu.edu.ph/"} target="_blank" >New Era University, Quezon City, PHL</Link>
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            <i>Graduated in 2008</i>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card text-base-content col-span-4 sm:col-span-9">
                            <div className="card-body bg-base-100 shadow rounded-lg p-6">
                                <span className="w-full flex items-center text-secondary text-xl font-bold mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                    </svg>
                                    <h2 className="text-xl text-secondary font-extrabold ml-1">About Me</h2>
                                </span>
                                <span>
                                    <p className="mb-2">
                                        I am a software developer with over 15 years of experience in creating and maintaining software solutions that help businesses run more efficiently. I enjoy working with teams to solve problems and deliver high-quality projects, even in fast-paced environments.
                                    </p>
                                    <p className="mb-2">
                                        I am committed to keeping up with new technologies and trends to improve my skills and deliver the best solutions possible. I’m passionate about what I do and always ready to tackle new challenges.
                                    </p>
                                </span>

                                <span className="w-full flex items-center text-secondary text-xl font-bold mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H16v13h.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H4Zm3-11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM11 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" clipRule="evenodd" />
                                    </svg>
                                    <h2 className="text-xl text-secondary font-extrabold ml-1">Work History</h2>
                                </span>
                                <div className="mb-2">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-base-content font-bold">
                                            <Link className="link link-hover" href={'https://cpi.com.ph'} target="_blank">Computer Professionals Inc.</Link>
                                        </span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-0">
                                        <i>June 2008 - present</i>
                                    </p>
                                </div>

                                <span className="w-full flex items-center text-secondary text-xl font-bold mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd" />
                                        <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
                                    </svg>
                                    <h2 className="text-xl text-secondary font-extrabold ml-1">Work Experience</h2>
                                </span>
                                <div className="mb-6">
                                    <div>
                                        <span className="text-error font-bold">
                                            Software Engineer @ <Link className="link link-hover" href={'https://www.kyndryl.com/us/en'} target="_blank">Kyndryl</Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-primary text-sm">
                                            Project: Kyndryl Bridge - Security Operations as a Platform
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 text-sm"><i>November 2023 - September 2024</i></span>
                                    </div>
                                    <div className="mt-2 ml-4">
                                        <ul className="list-disc list-outside ml-4">
                                            <li>Engineered a microservice front-end web component for Kyndryl Bridge, improving user interaction and functionality.</li>
                                            <li>Designed data visualization components that enhanced user understanding of key metrics, leading to a 20% increase in user engagement.</li>
                                            <li>Integrated Elasticsearch and Kibana Dashboards, facilitating real-time data analysis and reporting.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span className="text-primary text-sm">
                                            Project: Unified Resiliency Platform - Backup as a Service
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 text-sm"><i>November 2021 - October 2023 </i></span>
                                    </div>
                                    <div className="mt-2 ml-4">
                                        <ul className="list-disc list-outside ml-4">
                                            <li>Implemented a microservices architecture that improved system scalability, reducing downtime by 30%.</li>
                                            <li>Developed front-end components for the Unified Resiliency Platform, streamlining user workflows and enhancing system performance. </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div>
                                        <span className="text-error font-bold">
                                            Software Engineer @ <Link className="link link-hover" href={'https://www.ibm.com/consulting/business-continuity'} target="_blank">IBM - Business Continuity Resiliency Services</Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-primary text-sm">
                                            Projects: IBM SmartCloud Managed Backup Portal, IBM SmartCloud Data Recovery, and IBM Client Connect Portal (Angular & React)
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 text-sm"><i>June 2012 - October 2021</i></span>
                                    </div>
                                    <div className="mt-2 ml-4">
                                        <ul className="list-disc list-outside ml-4">
                                            <li>Created robust client-side architecture for single-page applications, increasing application load speed by 25%.</li>
                                            <li>Designed responsive web applications using HTML, CSS, jQuery, Angular, and React, ensuring a seamless user experience across devices. </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div>
                                        <span className="text-error font-bold">
                                            Java Developer (J2EE) @ <Link className="link link-hover" href={'https://cpi.com.ph'} target="_blank">Computer Professionals Inc.</Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-primary text-sm">
                                            Project: <Link className="link link-hover" href={'https://cpi.com.ph/services/insurance-solutions/'} target="_blank">GeniiSys WEB (General Insurance Information System)</Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 text-sm"><i>January 2010 - May 2012</i></span>
                                    </div>
                                    <div className="mt-2 ml-4">
                                        <ul className="list-disc list-outside ml-4">
                                            <li>Transformed client software to a web version using Java and Oracle, enhancing accessibility for end-users.</li>
                                            <li>Conducted database modifications and provided online support, improving client satisfaction by resolving issues swiftly.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div>
                                        <span className="text-error font-bold">
                                            Oracle Developer @ <Link className="link link-hover" href={'https://cpi.com.ph'} target="_blank">Computer Professionals Inc.</Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-primary text-sm">
                                            Project: <Link className="link link-hover" href={'https://cpi.com.ph/services/insurance-solutions/'} target="_blank">GeniiSys (General Insurance Information System)</Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 text-sm"><i>July 2008 - December 2009</i></span>
                                    </div>
                                    <div className="mt-2 ml-4">
                                        <ul className="list-disc list-outside ml-4">
                                            <li>Developed and debugged Oracle database objects and system modules, optimizing performance and functionality.</li>
                                            <li>Implemented enhancements that improved system efficiency, resulting in a 15% reduction in processing time for user queries. </li>
                                        </ul>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AboutMePage;
