import { FaHtml5, FaReact, FaCss3, FaNodeJs, FaJava, FaAngular, FaGitAlt } from 'react-icons/fa6';
import { SiJavascript, SiTypescript, SiSvelte, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
  { id: 'skill1', label: 'JavaScript', icon: <SiJavascript /> },
  { id: 'skill2', label: 'HTML5', icon: <FaHtml5 /> },
  { id: 'skill3', label: 'React', icon: <FaReact /> },
  { id: 'skill4', label: 'CSS3', icon: <FaCss3 /> },
  { id: 'skill5', label: 'Node.js', icon: <FaNodeJs /> },
  { id: 'skill6', label: 'TypeScript', icon: <SiTypescript /> },
  { id: 'skill7', label: 'Java', icon: <FaJava /> },
  { id: 'skill8', label: 'Angular.js', icon: <FaAngular /> },
  { id: 'skill9', label: 'Svelte', icon: <SiSvelte /> },
  { id: 'skill10', label: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { id: 'skill11', label: 'Next.js', icon: <SiNextdotjs /> },
  { id: 'skill12', label: 'Git', icon: <FaGitAlt /> },
]

const page = {
  label: 'Skills',
  desc: 'With expertise in languages such as JavaScript, React, and TypeScript, along with a strong foundation in agile methodologies and cloud technologies, I excel in developing scalable and efficient software solutions that enhance user experience.'
}

const Skills = () => {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl text-info font-extrabold">{page?.label}</h2>
      <p className="text-base-content my-2 whitespace-pre-line">{page?.desc}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {
          skills?.map((skill, index) => {
            return (
              <div key={index} className="flex flex-col bg-base-200 rounded-box py-6 px-5 mt-4">
                <div className="tooltip hover:tooltip-open tooltip-top" data-tip={skill?.label}>
                  <button className="text-6xl text-base-content duration-300 hover:text-info hover:scale-105" >{skill?.icon}</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Skills;