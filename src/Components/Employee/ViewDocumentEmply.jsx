import React, { useEffect, useState } from "react";
import SideBarEmpl from "./SideBarEmpl";
import { Link, useParams } from "react-router-dom";
import { documentViewDetails } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";

const ViewDocumentEmply = () => {
  const [viewPage, setViewPage] = useState();

  const { id } = useParams();

  useEffect(() => {
    const viewDetail = async () => {
      const documentView = await documentViewDetails(id);
      const view = documentView?.[0]?.templete_Id?.templete;
      console.log(view);
      setViewPage(view);
    };
    viewDetail();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 sidebar">
          <SideBarEmpl />
        </div>
        <div className="col-10 middle-content">
          <div className="container-fluid border-bottom mb-4">
            <nav className="row header bg-white  ">
              <ul className="col align-items-center mt-3">
                <li className="nav-item dropdown-hover d-none d-lg-block">
                  <a className="nav-link ms-2" href="app-email.html">
                    Documents Requests Management / View
                  </a>
                </li>
              </ul>
              <div className="col d-flex align-items-center  justify-content-end">
                <form role="search">
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
                  <Link to={"/Employee/Chat"}>
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
          <div className="container px-4 text-center min-vh-100 ">
            <div className="row bg-white rounded  p-4 m-4">
              <div className="col-12 d-flex justify-content-between mb-4">
                <p className="preview-cert-txt m-2">Preview</p>
                <div>
                  <a href={viewPage} download="document download">
                    <button className="preview-dwld-btn">Download</button>
                  </a>
                  {/* <button className="preview-edit-btn ms-3">Edit</button> */}
                </div>
              </div>
              <div className="col-12 mb-4 ">
                <div className="d-flex justify-content-start mt-4  col-4">
                  <img src="/images/template/template-view-logo.svg" alt="" />
                </div>
                {/* <p className="col-12 mb-4 text-start mt-4 pb-3">{viewData?.templeteName} <br/>  */}
                {/* 92680 Tustin, CA<br/> 
VAT no.: 12345678<br/> <br/>  */}

                {/* Date : {viewData?.createdAt}</p> */}

                <div>
                  <img src={viewPage} alt="page" className="view-detail-page" />
                </div>

                <div className="d-flex justify-content-start mt-4  col-4">
                  <img
                    src="/images/template/template-view-signature.svg"
                    alt=""
                    className="pb-4 mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDocumentEmply;
