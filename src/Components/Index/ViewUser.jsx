import React, { useEffect, useState } from "react";

import { EmployeeView } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";

const ViewUser = ({ userId }) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getViewUserData(userId);
  }, [userId]);

  const getViewUserData = async (id) => {
    // console.log(id);
    if (id) {
      let { data } = await EmployeeView(id);
      console.log(data);
      if (!data?.error) {
        setUserDetails(data?.results?.employee);
      }
    }
  };
  const defaultChecked = (roleName) => {
    return userDetails?.employRole?.flat()?.includes(roleName);
  };

  return (
    <div className="modal-dialog modal-dialog-users">
      <div className="modal-content border-0">
        <div className="d-flex modal-header border-bottom align-items-center">
          <p className="mb-0" id="exampleModalLabel">
            <span className="text-capitalize fw-bold fs-5">
              {userDetails?.name}
            </span>
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            id="closeModal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body view_user">
          <div>
            <div className="profile_img">
              <img
                className="w-100 h-100 object-fit-cover"
                src={
                  userDetails?.profile_Pic
                    ? userDetails?.profile_Pic
                    : "/images/tasks/modal-profile-photo.svg"
                }
                alt=""
              />
            </div>

            <div className="profile_data my-5">
              <div>
                <div className="row">
                  <div className="col-4">
                    <div className="title_head">
                      Name :
                      <span className="title_value"> {userDetails?.name}</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Department :
                      <span className="title_value">
                        {" "}
                        {userDetails?.department_Id?.departmentName}
                      </span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Employee Id :
                      <span className="title_value text_transform_none">
                        {" "}
                        {userDetails?.employId}
                      </span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Employee Title :
                      <span className="title_value">
                        {" "}
                        {userDetails?.employTitle}
                      </span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Phone Number :
                      <span className="title_value">
                        {" "}
                        {userDetails?.mobileNumber}
                      </span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Gender :
                      <span className="title_value">
                        {" "}
                        {userDetails?.gender}
                      </span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Email :
                      <span className="title_value text_transform_none"> {userDetails?.email}</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="title_head">
                      Salary :
                      <span className="title_value">
                        {" "}
                        {userDetails?.salary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="documents my-5">
                <div className=" d-flex ">
                  <img src="/images/dashboard/pdf-icon.svg" alt="" />
                  <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
                </div>
                <div className=" d-flex ">
                  <img src="/images/dashboard/pdf-icon.svg" alt="" />
                  <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
                </div>
              </div>

              <hr />

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="th-text">Assigned Role</th>
                      <th className="th-text">Permissions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Approver</td>
                      <td>
                        <input
                          type="checkbox"
                          name="Approver"
                          defaultChecked={defaultChecked("Approver")}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Admin</td>
                      <td>
                        <input
                          type="checkbox"
                          name="Admin"
                          defaultChecked={defaultChecked("Admin")}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Signatory</td>
                      <td>
                        <input
                          type="checkbox"
                          name="Signatory"
                          defaultChecked={defaultChecked("Signatory")}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Department Manager</td>
                      <td>
                        <input
                          type="checkbox"
                          name="Department Manager"
                          defaultChecked={defaultChecked("Department Manager")}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Employee</td>
                      <td>
                        <input
                          type="checkbox"
                          name="Department Manager"
                          defaultChecked={defaultChecked("Employee")}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
