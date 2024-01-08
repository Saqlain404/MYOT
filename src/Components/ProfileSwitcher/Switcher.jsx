import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../app/slice/userSlice";

const Switcher = () => {
  const [role, setRole] = useState();
  const [allRoleOfUser, setAllRoleOfUser] = useState([]);

  const userData = useSelector(selectUserData);

  const location = useLocation();

  useEffect(() => {
    const pathLocation = location.pathname.split("/");
    setRole(pathLocation[1]);
  }, [location]);

  useEffect(() => {
    getUserRole();
  }, []);

  const getUserRole = async () => {
    const getRole = userData?.employRole.flat(Infinity);
    setAllRoleOfUser(getRole);
  };

  const rolesToShow = [
    "Admin",
    "Department Manager",
    "Signatory",
    "Employee",
    "Approver",
  ];

  return (
    <>
      <a
        className="text-decoration-none pb-2 bg-white"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="profile">
          <div>
            <img
              className="w_50_h_50"
              src={
                userData?.profile_Pic
                  ? userData?.profile_Pic
                  : "/images/sidebar/ArrowLineDown2.svg"
              }
              alt="hh"
            />
          </div>
          <div>
            {/* <span className="text-dark">{userData?.name}</span> */}
            <span className="text-dark">
              {userData?.name?.split(" ")?.slice(0, 2)?.join(" ")}
            </span>
            <p className="th-text">{role}</p>
          </div>
          <div>
            <img src="/images/sidebar/ArrowLineDown2.svg" alt="hh" />
          </div>
        </div>
      </a>
      <ul className="dropdown-menu">
        {rolesToShow.map((roleToShow) => {
          if (allRoleOfUser.includes(roleToShow)) {
            const adjustedRole =
              roleToShow === "Department Manager" ? "Department" : roleToShow;
            return (
              <Link
                key={roleToShow}
                to={`/${adjustedRole}/Home`}
                className="text-decoration-none"
              >
                <li>
                  <a className="dropdown-item">{roleToShow}</a>
                </li>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </>
  );
};

export default Switcher;
