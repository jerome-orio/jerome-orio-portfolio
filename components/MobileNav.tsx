'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from './DesktopNav'
import { FaAlignJustify, FaTimes } from 'react-icons/fa'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className="relative lg:hidden">
            {/* Mobile Menu Toggle Button */}
            <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="btn btn-ghost text-base-content hover:scale-110 touch-pinch-zoom z-50 relative"
            >
                {isOpen ? (
                    <FaTimes className="w-6 h-6" />
                ) : (
                    <FaAlignJustify className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            {/* Navigation Menu */}
            <nav
                className={`
                    fixed top-0 right-0 h-full w-64 bg-secondary-content 
                    transform transition-transform duration-300 ease-in-out z-50
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    shadow-lg p-6
                `}
                aria-hidden={!isOpen}
            >
                <ul className="space-y-4 pt-12">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={closeMenu}
                                className={`
                                    flex items-center gap-3 text-xl font-bold 
                                    text-base-content p-3 rounded-lg transition-colors
                                    ${pathname === link.path
                                        ? 'bg-info text-primary-content'
                                        : 'hover:bg-base-200'}
                                `}
                            >
                                <span className="text-2xl">{link.icon}</span>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav