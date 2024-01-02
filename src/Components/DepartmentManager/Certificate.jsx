import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import { CertificateList } from "../../ApiServices/departmentHttpService/departmentHttpService";

const Certificate = () => {
  const documents = [
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar1.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar3.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar1.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
    {
      id: 1,
      certificateName: "Salary Slip.jpg",
      assignSignatories: [
        <img src="/images/dashboard/Avatar1.png" className="me-2"  alt=""/>,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfIssurance: "2021-04-16",
      status: <p className="text-primary m-0">Online</p>,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>,
    },
   
    // Add more tasks here
  ];

  const [listItems, setListItems] = useState([]);

  const getCertificateLists = async (key) => {
    const { data } = await CertificateList ({search: key});
    if (!data?.error) {
      setListItems(data?.results?.certificateList);
    }
  };
  console.log(listItems);

  useEffect(() => {
    getCertificateLists()
  }, [])
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Certificate Issued /
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form class="" role="search">
                    <input
                      class="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Department/Chat"}>
                    <img
                      src="/images/dashboard/chat-left-dots-fill.png"
                      alt=""
                      className="ms-4"
                    />
                    </Link>
                    <img
                      src="/images/dashboard/round-notifications.png"
                      alt=""
                      className="ms-4"
                    />
                  </div>
                </div>
              </nav>
            </div>

            <p className="table-name mb-2">Certificate</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3 table-searchbar-imgs">
                  {/* <img
                    src="/images/dashboard/Plus-icon.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  /> */}
                  <img
                    src="/images/dashboard/FunnelSimple.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
                  <img
                    src="/images/dashboard/ArrowsDownUp.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
                  <img
                    src="/images/dashboard/DotsThreeOutlineVertical2.png"
                    alt=""
                    className="p-2 table-searchbar-img border-end"
                  />
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around table-searchbar-txt">
                  <p className="m-0 text-nowrap">2 Selected</p>
                  <p className="hide-selected m-0 text-nowrap ">
                    Clear Selection
                  </p>
                </div>
              </div>
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control table-search-bar"
                  type="search"
                  placeholder="Type Something!"
                  aria-label="Search"
                />
              </form>
            </div>
           
                <div className="col-12 table_comman mt-3 ">
                <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr className="th-text">
                  <th className="th-text">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Certificate Name
                  </th>
                  <th className="th-text">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Assign Signatories
                  </th>
                  <th className="th-text">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Department
                  </th>
                  <th className="th-text">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Date of Issurance
                  </th>
                  <th className="th-text">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Status
                  </th>
                  <th className="th-text">
                  <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Action</th>
                </tr>
              </thead>
              <tbody >
                {listItems?.map((document) => (
                  <tr
                    key={document.id}
                    
                  >
                    <td className="td-text">
                      <input
                        className="form-check-input checkbox-table"
                        type="checkbox"
                        value=""
                      />
                      <img src="/images/dashboard/Featured Icon.png" alt="" />
                      {document?.templeteName}
                    </td>
                    <td className="td-text">
                    <img src={document?.signatory?.profile_Pic} className="list-profile-pic me-2"  alt=""/>
                      {document?.signatory?.name}
                    </td>
                    <td className="td-text">
                      
                      {document?.signatory?.department_Id?.departmentName}
                    </td>
                    <td className="td-text">
                    <img src="/images/dashboard/CalendarBlank.png" alt=""/>
                    {document.createdAt}</td>
                    <td className="td-text"><p className="text-primary m-0">{document.status}</p></td>
                    <td className="td-text"><div class="dropdown">
  <a type="" data-bs-toggle="dropdown" aria-expanded="false" href="/">
  <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" alt=""/>
  </a>
  <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
    <li >
      <Link to={"/Department/Certificate-view"} className="text-decoration-none">
      <a class="dropdown-item border-bottom" href="/"><img src="/images/users/AddressBook.svg" alt="" className="me-2"/>View Certificate</a>
      </Link>
      </li>
    <li><a class="dropdown-item border-bottom" href="/"><img src="/images/users/PencilLine.svg" alt="" className="me-2"/>Edit User Details</a></li>
    <li><Link to={"/Department/Comments"} className="text-decoration-none">
      <a class="dropdown-item" href="/"><img src="/images/dashboard/Comment.png" alt="" className="me-2"/>Comments</a>
      </Link></li>
    <li><a class="dropdown-item border-bottom" href="/"><img src="/images/users/TextAlignLeft.svg" alt="" className="me-2"/>Wrap Column</a></li>
    <li><a class="dropdown-item text-danger" href="/"><img src="/images/users/Trash.svg" alt="" className="me-2"/>Delete Template</a></li>
  </ul>
</div>
                          </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
          </div>
          <div className="col">
            <RightSidebar />
          </div>

          <div className="middle-section">
            <div className="body-wrapper">
              <div className="container-fluid">
                <div className="row d-flex flex-direction-row cards-row"></div>
                <div className="d-flex cardss"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
