import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import {
  AddTemplates,
  AdminsList,
  ApproverList,
  DepartmentTemplateCount,
  ManagerList,
  SearchTemplates,
  SignatoryList,
  TemplateList,
} from "../../ApiServices/departmentHttpService/departmentHttpService";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { toast } from "react-toastify";
import moment from "moment";
import { MDBDataTable } from "mdbreact";

const Template = () => {
  const [showClearButton, setShowClearButton] = useState(false);

  const documents = [
    {
      id: 1,
      templateName: "Employment Contract",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 2,
      templateName: "Tax Deduction at Source (TDS)",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 3,
      templateName: "Training Certificates",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-success m-0">Complete</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 4,
      templateName: "Software Licenses",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Information Technologies",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 5,
      templateName: "Reference Letter",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 6,
      templateName: "Annual Tax Statement",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 7,
      templateName: "Leave Application",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-secondary m-0">Rejected</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 8,
      templateName: "Marketing Campaign Reports",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    // Add more tasks here
  ];
  const [search, setSearch] = useState("");
  const [approverOptions, setApproverOptions] = useState([]);
  const [signOptions, setSignOptions] = useState([]);
  const [adminOptions, setAdminOptions] = useState([]);
  const [depManagerOptions, setDepManagerOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const id = localStorage.getItem("user_id");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    getApproverList();
    getSignatoryList();
    getAdminList();
    getManagersList();
    getTemplateLists();
  }, []);

  const [listItems, setListItems] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Assigned To",
        field: "assignTo",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Version",
        field: "version",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
        searchable: true,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
  });

  const getApproverList = async () => {
    try {
      let { data } = await ApproverList();
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.approver;
        setApproverOptions(values);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getSignatoryList = async () => {
    try {
      let { data } = await SignatoryList();
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.approver;
        setSignOptions(values);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAdminList = async () => {
    try {
      let { data } = await AdminsList();
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.admin;
        setAdminOptions(values);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getManagersList = async () => {
    try {
      let { data } = await ManagerList();
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.manager;
        setDepManagerOptions(values);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columnsWithCheckboxes = listItems?.columns?.map((column) => ({
    ...column,
    label: (
      <div key={column.field}>
        <input
          type="checkbox"
          checked={listItems.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
        />
        <label>{column.label}</label>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes?.filter(
    (column) => !listItems.hiddenColumns.includes(column.field)
  );

  const getTemplateLists = async (key) => {
    const { data } = await TemplateList();
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.templete;
      values?.map((list, index) => {
        let returnData = {};
        returnData.name = list?.templeteName;
        returnData.assignTo = list?.signatory?.name;
        returnData.version = list?.templeteVersion[0]?.version;
        returnData.date = moment(list?.createdAt).format("L");
        returnData.status = list?.status;
        returnData.department = list?.manager?.department_Id?.departmentName;
        returnData.actions = (
          <div class="text-center">
            <a
              className="cursor_pointer"
              type=""
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src="/images/sidebar/ThreeDots.svg" className="w-auto" />
            </a>
            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
              <li>
                <Link class="dropdown-item">
                  <img
                    src="/images/users/AddressBook.svg"
                    alt=""
                    className="me-2"
                  />
                  View Temp Details
                </Link>
              </li>
              <li>
                <a class="dropdown-item">
                  <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  />
                  Wrap Column
                </a>
              </li>
            </ul>
          </div>
        );
        newRows.push(returnData);
      });
      setListItems({ ...listItems, rows: newRows });
    }
  };


  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...listItems.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setListItems({ ...listItems, selectedColumns: updatedSelectedColumns });
  };

  // const [templateCount, setTemplateCount] = useState([]);


  const toggleSortOrder = () => {
    const currentSortType = listItems.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...listItems.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name < b.name) {
        comparison = -1;
      } else if (a.name > b.name) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });

    setListItems({
      ...listItems,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const showAllColumns = () => {
    setListItems({ ...listItems, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...listItems.hiddenColumns,
      ...listItems.selectedColumns,
    ];
    setListItems({
      ...listItems,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };
  const [templateCount, setTemplateCount] = useState([]);

  const getTemplateCount = async () => {
    let { data } = await DepartmentTemplateCount();
    if (!data?.error) {
      setTemplateCount(data?.results);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchTemplates({ search: value });
      if (!data?.error) {
        setListItems(data?.results?.document);
      }
    } else {
      getTemplateLists();
    }
  };

  const onSubmit = async (info) => {
    let formData = new FormData();
    console.log(info);
    formData.append("templeteName", info?.templeteName);
    formData.append("approver", info?.approver);
    formData.append("signatory", info?.signatory);
    formData.append("manager", info?.manager);
    formData.append("creator_Id", id);
    formData.append("admin", info?.creator_Id);
    formData.append("templete", files?.profile_img);

    const { data } = AddTemplates(formData);
    if (!data?.error) {
      console.log(data);
      getTemplateLists();
      toast.success(data?.message);
    }
    setTimeout(() => {
      getTemplateLists();
      document.getElementById("closeModal").click();
    }, [2000]);
  };

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    if (key === "profile_img") {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      // setProfileImgUrl(imageUrl);
    }
  };

  useEffect(() => {
    getTemplateCount();
    getTemplateLists();
  }, []);

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
                      /Template
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Template Create
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.totalTempleted}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Template Awaiting
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.totalAwaiting?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Recently Approved
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.totalApproved?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Active Signatories
                      </h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.aciveSignatory?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="table-name mb-2">Templates</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="d-flex ">
                <div
                  className="mt-1"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img
                    src="/images/dashboard/Plus-icon.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
                </div>
                <div className="col-md-3 table-searchbar-imgs">
                  <img
                    onClick={toggleSortOrder}
                    src="/images/dashboard/ArrowsDownUp.png"
                    className="p-2 table-searchbar-img border-end cursor_pointer"
                  />
                </div>
                <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
                  <p className="m-0 text-nowrap">
                    {listItems?.selectedColumns &&
                      listItems?.selectedColumns.length}
                    <span> Selected</span>
                  </p>
                  {showClearButton ? (
                    <p
                      className="hide-selected m-0 text-nowrap cursor_pointer "
                      onClick={showAllColumns}>
                      Clear Selection
                    </p>
                  ) : (
                    <p
                      className="hide-selected m-0 ms-2 text-nowrap cursor_pointer "
                      onClick={hideSelectedColumns}>
                      Hide Selected
                    </p>
                  )}
                </div>
              </div>
              <form className="d-flex me-2" role="search"></form>
            </div>

            <div className="col-12 mdb_table2 mt-3 ">
              <div className="table-responsive">
                <MDBDataTable
                  key={listItems}
                  bordered
                  displayEntries={false}
                  entries={5}
                  className="text-nowrap"
                  hover
                  data={{ ...listItems, columns: visibleColumns }}
                  // data={approvers}
                  noBottomColumns
                  paginationLabel={"«»"}
                  sortable={false}
                />
              </div>
            </div>

            <div className="footer">
              <div>© 2023 MYOT</div>
              <div className="d-flex ">
                <p className="ms-3">About</p>
                <p className="ms-3">Support</p>
                <p className="ms-3">Contact Us</p>
              </div>
            </div>
          </div>
          <div className="col">
            <RightSidebar />
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-department">
          <div class="modal-content border-0">
            <div class="d-flex modal-header border-bottom">
              <p class="" id="exampleModalLabel">
                Add Templates
              </p>
              <button
                type="button"
                class="btn-close"
                id="closeModal"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="row p-3">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Template Title"
                    name="templeteName"
                    // defaultValue={userDetails?.employTitle}
                    className={classNames("col-12 modal-input td-text  p-2", {
                      "is-invalid": errors.templeteName,
                    })}
                    {...register("templeteName", {
                      required: "* Template title is required",
                      pattern: {
                        value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                        message:
                          "Spaces at the start & numbers are not allowed",
                      },
                    })}
                  />
                  {errors.templeteName && (
                    <div className="invalid-feedback">
                      {errors.templeteName.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    autoComplete="false"
                    className="form-control cursor_pointer"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    id="profile_img"
                    name="profile_img"
                    type="file"
                    required
                    accept="image/*"
                    defaultValue=""
                    onChange={(e) => onFileSelection(e, "profile_img")}
                  />
                </div>
                <div className="col-12 mb-3 ">
                  <p className="bg-primary-subtle th-text ps-4 p-2">Assign</p>
                </div>
                <div className="col-12 border-bottom border-light mb-3 ">
                  <div className="row">
                    <p className="col-4 td-text p-2">
                      <input
                        className=" form-check-input checkbox-table ms-4 me-4"
                        type="checkbox"
                        value=""
                      />
                      Approver
                    </p>
                    <select
                      name="approver"
                      className={classNames(
                        " col modal-input th-text p-2 me-3",
                        {
                          "is-invalid": errors.approver,
                        }
                      )}
                      {...register("approver", {
                        required: "* Please select a Approver",
                      })}>
                      <option className="w-100">Select Approver</option>
                      {approverOptions &&
                        approverOptions.map((options) => (
                          <option
                            className="w-100"
                            key={options?._id}
                            value={options?._id}>
                            {options?.name}
                          </option>
                        ))}
                    </select>
                    {errors.approver && (
                      <div className="invalid-feedback">
                        {errors.approver.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-12 border-bottom border-light mb-3 ">
                  <div className="row">
                    <p className="col-4 td-text p-2">
                      <input
                        className=" form-check-input checkbox-table ms-4 me-4"
                        type="checkbox"
                        value=""
                      />
                      Signatory
                    </p>
                    <select
                      name="signatory"
                      className={classNames(
                        " col modal-input th-text p-2 me-3",
                        {
                          "is-invalid": errors.signatory,
                        }
                      )}
                      {...register("signatory", {
                        required: "* Please select a signatory",
                      })}>
                      <option className="w-100">Select signatory</option>
                      {signOptions &&
                        signOptions?.map((options) => (
                          <option
                            className="w-100"
                            key={options?._id}
                            value={options?._id}>
                            {options?.name}
                          </option>
                        ))}
                    </select>
                    {errors.signatory && (
                      <div className="invalid-feedback">
                        {errors.signatory.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-12 border-bottom border-light mb-3">
                  <div className="row">
                    <p className="col-4 td-text p-2">
                      <input
                        className=" form-check-input checkbox-table ms-4 me-4"
                        type="checkbox"
                        value=""
                      />
                      Admin
                    </p>
                    <select
                      name="creator_Id"
                      className={classNames(
                        " col modal-input th-text p-2 me-3",
                        {
                          "is-invalid": errors.creator_Id,
                        }
                      )}
                      {...register("creator_Id", {
                        required: "* Please select a Admin",
                      })}>
                      <option className="w-100">Select Admin</option>
                      {adminOptions &&
                        adminOptions?.map((options) => (
                          <option
                            className="w-100"
                            key={options?._id}
                            value={options?._id}>
                            {options?.name}
                          </option>
                        ))}
                    </select>
                    {errors.creator_Id && (
                      <div className="invalid-feedback">
                        {errors.creator_Id.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-12  mb-3 ">
                  <div className="row">
                    <p className="col-4 td-text p-2">
                      <input
                        className=" form-check-input checkbox-table ms-4 me-4"
                        type="checkbox"
                        value=""
                      />
                      Department Manger
                    </p>
                    <select
                      name="manager"
                      className={classNames(
                        " col modal-input th-text p-2 me-3",
                        {
                          "is-invalid": errors.manager,
                        }
                      )}
                      {...register("manager", {
                        required: "* Please select a Manager",
                      })}>
                      <option className="w-100">Select Manager</option>
                      {depManagerOptions &&
                        depManagerOptions?.map((options) => (
                          <option
                            className="w-100"
                            key={options?._id}
                            value={options?._id}>
                            {options?.name}
                          </option>
                        ))}
                    </select>
                    {errors.manager && (
                      <div className="invalid-feedback">
                        {errors.manager.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <button type="submit" class="user-modal-btn">
                  Add New
                </button>
                <button type="reset" class="user-modal-btn2">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
