import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import JoinFullTwoToneIcon from '@mui/icons-material/JoinFullTwoTone';
import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';

function TopNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "HOME", icon: <HouseTwoToneIcon />, link: "#" },
    { id: "about", label: "ABOUT US", icon: <InfoTwoToneIcon />, link: "#" },
    { id: "services", label: "SERVICES", icon: <SupportAgentTwoToneIcon />, link: "#" },
    { id: "join", label: "JOIN US", icon: <JoinFullTwoToneIcon />, link: "#" },
    { id: "contact", label: "CONTACT", icon: <PermContactCalendarTwoToneIcon />, link: "#" },
  ];

  return (
    <div className="shadow-md bg-white px-5 py-2 flex justify-between items-center">
      <div className="name-container">
        <div className="border-l-4 border-blue-500 rounded px-2 bg-gradient-to-l from-white to-[#99ccff]">
          <h3 className="font-bold">EDFN Technologies</h3>
          <p className="text-sm text-gray-500 font-bold">Innovation in you</p>
        </div>
      </div>

      <div className="flex gap-7 items-center">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={`flex items-center gap-1 px-3 py-1 transition font-bold ${active === item.id
              ? "text-bold text-blue-500 inline-block border-b-2 border-blue-500"
              : "text-black-600 hover:text-blue-500"
              }`}
            onClick={() => setActive(item.id)}
          >
            <span className={`${active === item.id ? "" : "text-blue-600"}`}>
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
