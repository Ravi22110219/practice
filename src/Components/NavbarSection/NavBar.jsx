import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/photoes/logo.png";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [homeActive, setHomeActive] = useState(false);
    const [showFeeDropdown, setShowFeeDropdown] = useState(false);
    const [showCourseAndBatchDropdown, setShowCourseAndBatchDropdown] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    const handleMenuItemClick = () => {
        setMenuActive(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setHomeActive(true);
        } else {
            setHomeActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.home} ${homeActive ? styles.active : ""}`}>
            <nav className={styles.mainNavbar}>
                <div className={styles.navLogo}>
                    <img src={logo} alt="Infinite Eduverse Logo" className={styles.logo} />
                    <div className={styles.navText}>
                        <h1>Infinite EduVerse</h1>
                        <h3>Sikar, Rajasthan</h3>
                    </div>
                </div>
                <ul className={`${styles.navList} ${menuActive ? styles.active : ""}`}>
            <li
                onMouseEnter={() => setShowCourseAndBatchDropdown(true)}
                onMouseLeave={() => setShowCourseAndBatchDropdown(false)}
            >
                <NavLink
                    to="/course&batch"
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Courses & Batch
                </NavLink>
                {showCourseAndBatchDropdown && (
                    <div className={styles.dropdown}>
                        <NavLink
                            to="/course&batch"
                            onClick={handleMenuItemClick}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            JEE Advanced
                        </NavLink>
                        <NavLink
                            to="/course&batch"
                            onClick={handleMenuItemClick}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            JEE Main
                        </NavLink>
                        <NavLink
                            to="/course&batch"
                            onClick={handleMenuItemClick}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            NEET UG
                        </NavLink>
                    </div>
                )}
            </li>
            <li>
                <NavLink
                    to="/admission"
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Admission
                </NavLink>
            </li>
            <li
                onMouseEnter={() => setShowFeeDropdown(true)}
                onMouseLeave={() => setShowFeeDropdown(false)}
            >
                <NavLink
                    to={"/feeAndScholarship/feeStructure"}
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Fee & Scholarship
                </NavLink>
                {showFeeDropdown && (
                    <div className={styles.dropdown}>
                        <NavLink
                            to="/feeAndScholarship/feeStructure"
                            onClick={handleMenuItemClick}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Fee Structure
                        </NavLink>
                        <NavLink
                            to="/feeAndScholarship/scholarship"
                            onClick={handleMenuItemClick}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Scholarship
                        </NavLink>
                        <NavLink
                            to="/feeAndScholarship/feeRefundRules"
                            onClick={handleMenuItemClick}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Refund Rules
                        </NavLink>
                    </div>
                )}
            </li>
            <li>
                <NavLink
                    to="/gallery"
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/result"
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Results
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blog"
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/whychoiceus"
                    onClick={handleMenuItemClick}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Blog Admin
                </NavLink>
            </li>
        </ul>
                <div className={styles.menuBtn} onClick={handleMenuToggle}>
                    {menuActive ? (
                        <AiOutlineMenuUnfold style={{ height: "50px", width: "100px"}} />
                    ) : (
                        <AiOutlineMenuFold style={{ height: "50px", width: "100px"}} />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
