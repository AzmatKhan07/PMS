import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdContactPage } from "react-icons/md";

const SideMenu = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <aside className="h-[100vh] w-[80%] md:w-[16%] border-r hidden md:block">
      <div className="flex items-center justify-center w-full py-4">
        <img className="cursor-pointer" src="/logo.svg" alt="" />
      </div>

      <ul className="flex flex-col gap-2 px-5 mt-5">
        <NavLink to={"/"}>
          <li className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gray-100">
            <MdDashboard className="text-xl" />
            Dashboard
          </li>
        </NavLink>

        <li
          onClick={toggleSubmenu}
          className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-100"
        >
          <ImUsers className="text-xl" />
          Employees
          {showSubmenu ? (
            <IoIosArrowUp className="ml-auto text-lg" />
          ) : (
            <IoIosArrowDown className="ml-auto text-lg" />
          )}
        </li>

        {showSubmenu && (
          <ul className="pl-10">
            <NavLink to={"/form-control"}>
              <li className="px-2 py-2 text-sm font-medium rounded-md ">
                Employee Form
              </li>
            </NavLink>
            <NavLink to={"/view-data"}>
              <li className="px-2 py-2 text-sm font-medium rounded-md ">
                Employee List
              </li>
            </NavLink>
          </ul>
        )}

        <NavLink to={"/examplePage"}>
          <li className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gray-100">
            <MdContactPage className="text-xl" />
            Example
          </li>
        </NavLink>
        <NavLink to={"/examplePage1"}>
          <li className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gray-100">
            <MdContactPage className="text-xl" />
            Example 1
          </li>
        </NavLink>
        <NavLink to={"/examplePage2"}>
          <li className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gray-100">
            <MdContactPage className="text-xl" />
            Example 2
          </li>
        </NavLink>
        <NavLink to={"/examplePage3"}>
          <li className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gray-100">
            <MdContactPage className="text-xl" />
            Example 3
          </li>
        </NavLink>
        <NavLink to={"/examplePage4"}>
          <li className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full hover:bg-gray-100">
            <MdContactPage className="text-xl" />
            Example 4
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default SideMenu;
