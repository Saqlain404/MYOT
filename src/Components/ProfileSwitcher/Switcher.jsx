import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../app/slice/userSlice";
import Swal from "sweetalert2";

const Switcher = () => {
  const [role, setRole] = useState();
  const [allRoleOfUser, setAllRoleOfUser] = useState([]);
  const userData = useSelector(selectUserData);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathLocation = location.pathname.split("/");
    setRole(pathLocation[1]);
  }, [location]);

  useEffect(() => {
    let adminRoutes = location.pathname.startsWith("/Admin");
    let sigRoutes = location.pathname.startsWith("/Signatory");
    let empRoutes = location.pathname.startsWith("/Employee");
    let approverRoutes = location.pathname.startsWith("/Approver");
    let deptRoutes = location.pathname.startsWith("/Department");

    let roles = userData?.employRole;
    if (!roles.includes("Admin") && adminRoutes) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "You may not have permission to access",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 7000,
      });
      navigate("/Login");
    }
    if (!roles?.includes("Signatory") && sigRoutes) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "You may not have permission to access",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 7000,
      });
      navigate("/Login");
    }
    if (!roles?.includes("Department Manager") && deptRoutes) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "You may not have permission to access",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 7000,
      });
      navigate("/Login");
    }
    if (!roles?.includes("Approver") && approverRoutes) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "You may not have permission to access",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 7000,
      });
      navigate("/Login");
    }
    if (!roles?.includes("Employee") && empRoutes) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "You may not have permission to access",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 7000,
      });
      navigate("/Login");
    }
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
        className="text-decoration-none pb-2 bg-white w-100"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="profile">
          <div>
            {userData?.profile_Pic ? (
              <img
                className="w_50_h_50"
                src={userData?.profile_Pic}
                alt="Profile"
              />
            ) : (
              <img
                className="w_50_h_50"
                src="/images/icons/user.jpg"
                alt="Profile"
              />
            )}
          </div>
          <div>
            {/* <span className="text-dark">{userData?.name}</span> */}
            <span className="text-dark text-capitalize">
              {userData?.name?.split(" ")?.slice(0, 2)?.join(" ") ||
                userData?.companyName}
            </span>
            <p className="th-text">
              {role && role === "Department" ? "Department Manager" : role}
            </p>
          </div>
          <div>
            <img src="/images/sidebar/ArrowLineDown2.svg" alt="hh" />
          </div>
        </div>
      </a>
      <ul className="dropdown-menu">
        {rolesToShow?.map((roleToShow) => {
          if (allRoleOfUser?.includes(roleToShow)) {
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
