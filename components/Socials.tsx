import Link from "next/link"
import { FaLinkedinIn, FaGithub } from "react-icons/fa6"

type Social = {
    icon: JSX.Element;
    path: string;
}

const socials: Social[] = [
    { icon: <FaGithub />, path: 'https://github.com/jerome-orio' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/jerome-orio-dev' },
];

const Socials = ({ divClassName, iconClassName }: { divClassName: string, iconClassName: string }) => {
    return (
        <div className={divClassName}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} className={iconClassName} target="_blank" rel="noopener noreferrer">{social.icon}</Link>
                )
            })}
        </div>
    )
}

export default Socials