import Link from 'next/link'
import { links } from './DesktopNav'
import { FaAlignLeft } from 'react-icons/fa6'

const MobileNav = () => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn text-base-content btn-ghost lg:hidden hover:scale-110 touch-pinch-zoom">
                <FaAlignLeft className="w-8 h-8" />
            </div>
            <ul tabIndex={0} className="menu menu-lg dropdown-content bg-secondary-content rounded-box z-[1] mt-3 w-60 p-2 shadow">
                {links.map((link, index) => {
                    return (
                        <li key={index} ><Link key={index} href={link.path} className="text-xl font-bold text-base-content duration-1000" >{link.icon} {link.name}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MobileNav