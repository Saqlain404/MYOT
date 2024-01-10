import React, { useEffect, useState } from "react";
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import {
  CompanyList,
  MainDashboardCount,
  acceptPermission,
  rejectedPermission,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import MainSidebar from "./sidebar";

const MainHome = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [adminCount, setAdminCount] = useState();

  const [templates, setTemplates] = useState({
    columns: [
      {
        label: "Company Name",
        field: "name",
        sort: false,
        width: 50,
        selected: false,
      },
      {
        label: "Email",
        field: "email",
        width: 50,
        selected: false,
      },
      {
        label: "Address",
        field: "address",
        width: 100,
        selected: false,
      },
      {
        label: "Mobile No",
        field: "mobile",
        width: 100,
        selected: false,
      },

      {
        label: "Actions",
        field: "actions",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
    sortColumnName: "name",
    sortType: "asc",
  });

  useEffect(() => {
    getCompanyListing();
    getAdminCount();
  }, []);

  const getAdminCount = async () => {
    let { data } = await MainDashboardCount();
    if (!data.error) {
      setAdminCount(data?.results);
    }
  };

  const getCompanyListing = async () => {
    let { data } = await CompanyList();

    if (!data.error) {
      const newRows = [];
      let values = data.results.list;

      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.companyName;
        returnData.email = list?.email;
        returnData.address = list?.address;
        returnData.mobile = list?.mobileNumber;

        returnData.actions = (
          <div class="text-center">
            <a
              className="cursor_pointer"
              type=""
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/images/sidebar/ThreeDots.svg" className="w-auto" />
            </a>
            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
              <li onClick={() => accept(list?._id)}>
                <a class="dropdown-item border-bottom text-success" href="#">
                  <img
                    src="/images/users/PencilLine.svg"
                    alt=""
                    className="me-2"
                  />
                  Approve
                </a>
              </li>

              <li className="cursor_pointer" onClick={() => reject(list?._id)}>
                <a class="dropdown-item text-danger">
                  <img src="/images/XCircle.svg" alt="" className="me-2" />
                  Reject
                </a>
              </li>
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setTemplates({ ...templates, rows: newRows });
    }
  };

  const accept = async (id) => {
    try {
      let { data } = await acceptPermission(id);
      if (!data.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Approved successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getCompanyListing();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const reject = async (id) => {
    try {
      let { data } = await rejectedPermission(id);
      if (!data.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Rejected successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getCompanyListing();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = templates.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...templates.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name < b.name) {
        comparison = -1;
      } else if (a.name > b.name) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });

    setTemplates({
      ...templates,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...templates.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setTemplates({ ...templates, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...templates.hiddenColumns,
      ...templates.selectedColumns,
    ];
    setTemplates({
      ...templates,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = templates.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field}>
        <input
          type="checkbox"
          checked={templates.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-2 mt-1"
        />
        <label>{column.label}</label>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !templates.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setTemplates({ ...templates, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <MainSidebar />
          </div>
          <div className="col middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Home
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form className="" role="search">
                    <input
                      className="form-control search-bar"
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
                    <Link to={"/Admin/Chat"}>
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-lg-4  mb-md-2">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">Total Users</h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {adminCount?.totalCompany[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  mb-md-2 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">Approved Users</h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {adminCount?.totalApprovedCount[0].count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  mb-md-2 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">Rejected Users</h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {adminCount?.totalRejectedCount[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-relative">
              <p className="table-name mb-2">Home</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    {/* <img
                      src="/images/dashboard/Plus-icon.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    /> */}
                    <img
                      onClick={toggleSortOrder}
                      src="/images/dashboard/ArrowsDownUp.png"
                      className="p-2 table-searchbar-img border-end cursor_pointer"
                    />
                  </div>
                  <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
                    <p className="m-0 text-nowrap">
                      {templates?.selectedColumns &&
                        templates?.selectedColumns.length}
                      <span> Selected</span>
                    </p>
                    {showClearButton ? (
                      <p
                        className="hide-selected m-0 text-nowrap cursor_pointer "
                        onClick={showAllColumns}
                      >
                        Clear Selection
                      </p>
                    ) : (
                      <p
                        className="hide-selected m-0 ms-2 text-nowrap cursor_pointer "
                        onClick={hideSelectedColumns}
                      >
                        Hide Selected
                      </p>
                    )}
                  </div>
                </div>
                <form className="d-flex me-2" role="search"></form>
              </div>
              <div className="col-12 mdb_table ">
                <div className="table-responsive">
                  <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={10}
                    className="text-nowrap"
                    hover
                    data={{ ...templates, columns: visibleColumns }}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                  />
                </div>
              </div>
            </div>

            {/* <Document /> */}

            <div className="footer">
              <div>© 2023 MYOT</div>
              <div className="d-flex ">
                <p className="ms-3">About</p>
                <p className="ms-3">Support</p>
                <p className="ms-3">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
