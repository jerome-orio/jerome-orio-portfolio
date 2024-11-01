"use client";

import Link from 'next/link';
import { FaHouseChimney, FaUserTie, FaCode, FaEnvelope } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

type Links = {
    icon: JSX.Element;
    path: string;
    name: string;
}

export const links: Links[] = [
    { icon: <FaHouseChimney />, path: '/', name: 'Home' },
    { icon: <FaUserTie />, path: '/about-me', name: 'About Me' },
    { icon: <FaCode />, path: '/projects', name: 'Projects' },
    { icon: <FaEnvelope />, path: '/contact', name: 'Contact' },
];

const DesktopNav = () => {
    const pathname = usePathname();

    return (
        <ul className="menu menu-horizontal px-1 gap-4">
            {links.map(({ icon, path, name }) => (
                <li key={name}>
                    <Link
                        href={path}
                        className={`text-xl font-bold text-base-content duration-500 hover:scale-105 ${pathname === path ? 'text-info font-extrabold' : ''}`}
                        aria-label={name}
                    >
                        {icon} {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default DesktopNav;
