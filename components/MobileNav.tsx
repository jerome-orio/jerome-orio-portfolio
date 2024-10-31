"use client";

import React from 'react';
import Link from 'next/link';
import { links } from './DesktopNav';
import { FaAlignLeft } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <div className="dropdown">
            <div
                tabIndex={0}
                role="button"
                onClick={toggleDropdown}
                onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
                className="btn text-base-content btn-ghost lg:hidden hover:scale-110 touch-pinch-zoom"
            >
                <FaAlignLeft className="w-6 h-6" />
            </div>
            {isOpen && (
                <ul className="menu menu-lg dropdown-content bg-secondary-content rounded-box z-[1] mt-3 w-60 p-2 shadow transition-opacity duration-300 ease-in-out">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className={`text-xl font-bold duration-300 ${currentPath === link.path ? 'text-info font-extrabold' : 'text-base-content'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon} {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MobileNav;
