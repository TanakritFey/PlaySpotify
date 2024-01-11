import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  HiOutlineHome, HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlinePlaylistPlay } from "react-icons/md";
import whitelogo from '../assets/whitelogo.png'

const links = [
  { name: 'Home', to: '/', icon: HiOutlineHome },
  { name: 'Playlist', to: '/', icon: MdOutlinePlaylistPlay },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={whitelogo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
        <div className="mt-96 flex flex-col space-y-4 text-start ">
        <div className="border-b border-gray-600"></div>
                <a className="text-xs text-gray-600 mx-4" href="#">
                    Legal
                </a>
                <a className="text-xs text-gray-600 mx-4" href="#">
                    Privacy Center
                </a>
                <a className="text-xs text-gray-600 mx-4" href="#">
                    Privacy Policy
                </a>
                <a className="text-xs text-gray-600 mx-4" href="#">
                    Cookies
                </a>
                <a className="text-xs text-gray-600 mx-4" href="#">
                    About Ads
                </a>
                <a className="text-xs text-gray-600 mx-4" href="#">
                    Accessibility
                </a>
            </div>
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={whitelogo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
      
    </>
  );
};

export default Sidebar;