import React from "react";
import { useNavigate } from "react-router-dom";
const NavBar = ({ navOptions }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-2 h-7 bg-orange-500 flex justify-between items-start flex-wrap p-1/2">
        <div className="flex items-center mt-0.5">
          <a
            href="/"
            className=" flex no-underline justify-between items-center"
          >
            <img
              className="cursor-pointer border border-white ml-px relative mb-1 mr-1"
              src="https://news.ycombinator.com/y18.gif"
              alt="logo"
            />
            <span className="font-semibold">Hacker News</span>
          </a>

          {navOptions.map((navOption) => (
            <div key={navOption.name}>
              <span
                className="text-base no-underline cursor-pointer ml-2.5 text-gray-900 hover:text-white"
                onClick={() => navigate(navOption.path)}
              >
                {navOption.name}
              </span>
              &nbsp; | &nbsp;
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
