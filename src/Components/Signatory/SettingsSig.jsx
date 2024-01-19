import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import {
  Logos,
  UpdateLogo,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import Swal from "sweetalert2";

const SettingsSig = () => {
  const [logosList, setLogosList] = useState([]);
  const [files, setFiles] = useState([]);
  const [cId, setCId] = useState();
  const [profileImgUrl, setProfileImgUrl] = useState();

  useEffect(() => {
    getLogos();
  }, []);

  const getLogos = async () => {
    let id = localStorage.getItem("myot_admin_id");
    setCId(id);
    let { data } = await Logos(id);
    console.log(data);
    if (!data?.error) {
      setLogosList(data?.results?.logoList);
    }
  };

  const handleFileSelection = async (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    const selectedFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfileImgUrl(imageUrl);
  };

  const handleSubmit = async () => {
    if (!files?.logo) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Select image",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    const formData = new FormData();
    formData.append("logo", files?.logo);
    formData.append("creator_Id", cId);
    let { data } = await UpdateLogo(formData);
    console.log(data);
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Logo Added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("reset").click();
      setFiles([]);
      getLogos();
      setProfileImgUrl(null);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold"> Settings</a>
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

            <div className="container px-4 text-center min-vh-100 ">
              <div className="row rounded">
                <div className="bg-white rounded mb-4 p-4 pb-2">
                  <div className="d-flex">
                    <Link to={"/"} className="text-decoration-none">
                      <p className="td-text border-bottom me-3">
                        Business Assets
                      </p>
                    </Link>
                    <Link className="text-decoration-none">
                      <p className="th-text  ">System Setting</p>
                    </Link>
                  </div>
                  <div>
                    <p className="settings-txt">Select Logo</p>
                    <div className="row">
                      {logosList &&
                        logosList?.map((logos) => (
                          <div className="col-2 my-2 setting_logo">
                            <img className="" src={logos?.logo} alt="logo" />
                          </div>
                        ))}
                    </div>
                    <div className="my-4">
                      <div>
                        <p className="settings-txt mt-3">Upload Logo</p>
                        <label htmlFor="logo" className="w-100">
                          <input
                            type="file"
                            defaultValue=""
                            id="logo"
                            name="logo"
                            className="d-none"
                            onChange={(e) => handleFileSelection(e, "logo")}
                          />
                          <div className="dashed_border w-100 py-5 position-relative">
                            {profileImgUrl && (
                              <div className="position-absolute top-0 end-0">
                                <p>Selected Image</p>
                                <img
                                  className="w_100_h_100"
                                  src={profileImgUrl}
                                />
                              </div>
                            )}
                            <div>
                              <img
                                src={require("../../assets/logo/img.png")}
                                alt=""
                              />
                            </div>
                            <p className="py-3">
                              Drag and drop logo here, or click select image
                            </p>
                            {files?.logo && files?.logo ? (
                              <>
                                <button
                                  onClick={handleSubmit}
                                  className="blue_btn"
                                >
                                  Upload Image
                                </button>
                              </>
                            ) : (
                              <>
                                <label
                                  htmlFor="logo"
                                  className="text-center cursor_pointer blue_btn"
                                >
                                  Select Image
                                </label>
                              </>
                            )}
                            <button id="reset" type="reset" className="d-none">
                              reset
                            </button>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default SettingsSig;
