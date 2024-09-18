import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoMoon } from "react-icons/go";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex items-center justify-between w-[100%] px-3 md:px-10 py-3  border-b border-gray-100">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="relative flex items-center gap-3">
        <button className="hidden px-8 py-3 text-sm font-medium text-white rounded-full md:inline-block bg-primary">
          Quick Btn
        </button>

        <button className="p-3 text-primary rounded-full bg-[#7F57F120] aspect-square">
          <GoMoon className="text-2xl" />
        </button>

        <img
          className="object-cover w-12 h-12 rounded-full cursor-pointer"
          src="/user.jpg"
          alt=""
          onClick={toggleDropdown}
        />

        {/* mobile Menu Button */}

        <button className="inline-block md:hidden">
          <HiMenuAlt3 className="text-3xl" />
        </button>

        {dropdownVisible && (
          <ul className="absolute top-14 right-0 bg-white shadow-lg p-3 rounded w-[140px]">
            <li className="px-3 py-1 mb-2 text-sm font-medium cursor-pointer hover:bg-gray-200">
              My Profile
            </li>
            <li className="px-3 py-1 mb-2 text-sm font-medium cursor-pointer hover:bg-gray-200">
              Settings
            </li>
            <li className="px-3 py-1 mb-2 text-sm font-medium cursor-pointer hover:bg-gray-200">
              LogOut
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
