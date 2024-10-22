import Link from 'next/link'
import { FaHouseChimney, FaUserTie, FaCode, FaEnvelope } from 'react-icons/fa6';

type Links = {
    icon: JSX.Element;
    path: string;
    name: string;
}

export const links: Links[] = [
    { icon: <FaHouseChimney />, path: '/', name: 'Home' },
    { icon: <FaUserTie />, path: '/about-me', name: 'About Me' },
    { icon: <FaCode />, path: '/', name: 'Projects' },
    { icon: <FaEnvelope />, path: '/contact', name: 'Contact' },
];

const DesktopNav = () => {
    return (
        <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link, index) => {
                return (
                    <li key={index} ><Link key={index} href={link.path} className="text-xl font-bold text-base-content duration-500 hover:scale-105" >{link.icon} {link.name}</Link></li>
                )
            })}
        </ul>
    )
}

export default DesktopNav