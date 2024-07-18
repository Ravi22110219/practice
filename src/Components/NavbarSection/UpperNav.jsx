import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';

const UpperNav = () => {
    return (
        <section className="bg-gray-100  border-b border-gray-300" id="home">
            {/* Main Navbar Starts */}
            <div className="w-full h-[5vh] min-h-[40px] px-[4%] bg-black flex items-center justify-between">
                <div className="w-1/2">
                    <ul className="flex items-center list-none p-0 m-0">
                        <li className="mr-2.5">
                            <NavLink 
                                to="/" 
                                className={(isActive) => `relative text-white font-medium text-sm uppercase no-underline tracking-wide flex items-center justify-center ${isActive ? 'text-orange-700' : 'text-gray-700'}`}
                            >
                                <AiFillHome className="mr-2" />
                                Home
                                <span className="absolute content-[''] w-full h-0.5 bg-light-heading-clr left-0 top-[calc(100%+2px)] transition-transform transform scale-x-0 hover:scale-x-100"></span>
                            </NavLink>
                        </li>
                        <li className="mx-2.5">
                        <NavLink 
                                to="https://maps.app.goo.gl/M6oCtoCrL3U8q9aK6" 
                                target="main" 
                                className={(isActive) => `relative text-white font-medium text-sm uppercase no-underline tracking-wide flex items-center justify-center ${isActive ? 'text-orange-700' : 'text-gray-700'}`}
                            >
                                <AiFillHome className="mr-2" />
                                Center
                                <span className="absolute content-[''] w-full h-0.5 bg-light-heading-clr left-0 top-[calc(100%+2px)] transition-transform transform scale-x-0 hover:scale-x-100"></span>
                            </NavLink>
                          
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 flex justify-end mr-0">
                    <button className="w-20 h-6 bg-red-600 text-white border border-gray-600 rounded-full cursor-pointer mr-2.5 hover:bg-red-500 flex items-center justify-center">
                        <MdComputer className="mr-1.25 mr-1" />
                        Apply
                    </button>
                    <button className="w-20 h-6 bg-blue-600 text-white rounded-full cursor-pointer border border-gray-600 hover:bg-blue-400 flex items-center justify-center">
                        <BiLogIn className="mr-1.25 mr-1" />
                        Log In
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpperNav;
