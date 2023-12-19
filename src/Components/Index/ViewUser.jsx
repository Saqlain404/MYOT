import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ViewUser = ({ id }) => {
  const [userDetails, setUserDetails] = useState();

  return (
    <div className="modal-dialog modal-dialog-users">
      <div className="modal-content border-0">
        <div className="d-flex modal-header border-bottom align-items-center">
          <p className="mb-0" id="exampleModalLabel">
            {id}
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
                src="/images/tasks/modal-profile-photo.svg"
                alt=""
              />
            </div>

            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
