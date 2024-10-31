import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const TopNav = () => {
    return (
        <header className="shadow-md shadow-base-100 sticky top-0 z-40">
            <div className="navbar bg-secondary-content bg-opacity-95">
                <div className="navbar-start">
                    <MobileNav />
                    {/* Uncomment if implementing a theme controller */}
                    {/* <input type="checkbox" value="bumblebee" className="toggle theme-controller fill-base-content text-base-content ml-4" aria-label="Theme Controller" /> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <DesktopNav />
                </div>
                <div className="navbar-end">
                    {/* Uncomment to implement profile dropdown */}
                    {/*
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-lg btn-secondary btn-circle avatar">
                            <div className="w-28 rounded-full">
                                <ProfilePicture />
                            </div>
                        </div>
                        <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold text-base-content">Jerome Orio</span>
                                <span className="text-secondary">Software Developer</span>
                            </div>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </header>
    );
}

export default TopNav;
