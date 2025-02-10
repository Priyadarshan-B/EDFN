import React, { useState } from 'react';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import JoinFullTwoToneIcon from '@mui/icons-material/JoinFullTwoTone';
import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function TopNav() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME", icon: <HouseTwoToneIcon /> },
    { id: "about", label: "ABOUT US", icon: <InfoTwoToneIcon /> },
    { id: "services", label: "SERVICES", icon: <SupportAgentTwoToneIcon /> },
    { id: "process", label: "JOIN US", icon: <JoinFullTwoToneIcon /> },
    { id: "contact", label: "CONTACT", icon: <PermContactCalendarTwoToneIcon /> },
  ];

  const handleScrollToSection = (sectionId) => {
    setActive(sectionId);
    setIsMobileMenuOpen(false);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 shadow-md bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="border-l-4 border-blue-500 rounded px-2 bg-gradient-to-l from-white to-[#99ccff]">
          <h3 className="font-bold">EDFN Technologies</h3>
          <p className="text-sm text-gray-500 font-bold">Innovation in you</p>
        </div>

        <div className="hidden md:flex gap-7 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-1 px-3 py-1 transition font-bold ${
                active === item.id
                  ? "text-bold text-blue-500 inline-block border-b-2 border-blue-500"
                  : "text-black-600 hover:text-blue-500"
              }`}
              onClick={() => handleScrollToSection(item.id)}
            >
              <span className={`${active === item.id ? "" : "text-blue-600"}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-sm`}>
        <div className="px-4 py-2 flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-3 px-3 py-3 text-sm font-bold ${
                active === item.id
                  ? "text-blue-500 bg-blue-50 rounded-lg"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => handleScrollToSection(item.id)}
            >
              <span className="text-blue-600">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default TopNav;