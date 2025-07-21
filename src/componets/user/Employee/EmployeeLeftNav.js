import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { FaAlignLeft, FaUserTie } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdExpandLess, MdKeyboardArrowRight } from "react-icons/md";

import MenuIcon from "../../../assets/images/menu_icon.png";
import "../../../assets/css/AdminDashBoard.css";
import "../../../custom/Mainstyle.css";

function EmployeeLeftNav() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [expandedMenus, setExpandedItems] = useState({});
  const navigate = useNavigate();

  const adminName = localStorage.getItem("admin_first_name");

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  const toggleSubMenu = (index) => {
    setExpandedItems((prev) => ({
      [index]: !prev[index],
    }));
  };

  // ✅ Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("admin_id");
    localStorage.removeItem("admin_user_id");
    localStorage.removeItem("admin_access");
    localStorage.removeItem("admin_refresh");
    localStorage.removeItem("admin_first_name");
    localStorage.removeItem("admin_last_name");
    localStorage.removeItem("admin_user_type");
    alert("Logged out successfully!");
    navigate("/AdminLogin");
  };

  const navigationOptions = [
    { icon: <RxDashboard />, label: "Dashboard", path: "/EmployeeDashboard" },
    {
      icon: <FaUserTie />,
      label: "Application ",
      path: "/Manday Worker Info",
    },
    {
      icon: <FaUserTie />,
      label: "Statistics ",
      path: "/Manday Worker Info",
    },
    {
      icon: <FaUserTie />,
      label: "Job Approvals ",
      path: "/Manday Worker Info",
    },
    {
      icon: <FaUserTie />,
      label: "Users Report ",
      path: "/Manday Worker Info",
    },
    {
      icon: <FaUserTie />,
      label: "Assign Access ",
      path: "/Manday Worker Info",
    },
    {
      icon: <FaUserTie />,
      label: "Settings ",
      path: "/Manday Worker Info",
    },
  ];

  return (
    <>
      <header className="user-awc-header">
        <div className="logosec">
          <img
            src={MenuIcon}
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={toggleNav}
          />
          <div className="awc-title">
            <span className="awc-subtitle">BrainRock</span>
          </div>
        </div>

        <div className="message">
          <div className="awc-msg p-2">
            <Link to="/AdminProfile">
              <span className="mx-2">Employee Profile :</span>
            </Link>
            <span>{adminName ? adminName : "Admin"}</span>
          </div>
          <div className="dp" alt="logout" title="Click to logout" onClick={handleLogout}>
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="cdpo-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
              <div className="nav-upper-options">
                <div className="awc-menu">
                  <div>
                    <FaAlignLeft className="icn menuicn" onClick={toggleNav} />
                  </div>
                  <div className="awc-user">Employee : Profile</div>
                  <div className="awc-log-icon-mob" onClick={handleLogout}>
                    <LuLogOut title="Click to logout" />
                  </div>
                </div>

                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      <Link
                        to={option.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    ) : option.subRoutes ? (
                      <>
                        <div
                          className={`nav-option option${index + 1}`}
                          onClick={() => toggleSubMenu(option.label)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="nav-item">
                            <div className="awc-nav-items">
                              <span className="nav-icon">{option.icon}</span>
                              <span className="nav-label">{option.label}</span>
                              <span className="dropdown-arrow">
                                {expandedMenus[option.label] ? (
                                  <MdExpandLess />
                                ) : (
                                  <MdKeyboardArrowRight />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {expandedMenus[option.label] &&
                          option.subRoutes.map((subOption, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subOption.path}
                              className="nav-sub-option"
                            >
                              <div className="nav-item">
                                <div className="d-flex awc-sub-item">
                                  <span className="nav-icon">{subOption.icon}</span>
                                  <span className="nav-label">{subOption.label}</span>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </>
                    ) : (
                      <Link
                        to={option.path}
                        className={`nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeLeftNav;
