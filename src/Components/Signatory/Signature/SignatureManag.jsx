import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SignatorySignatureList,
  SignatoryUpdateSignature,
} from "../../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { toast } from "react-toastify";

const SignatureManag = () => {
  const [signatureList, setSignatureList] = useState([]);
  const [files, setFiles] = useState([]);
  const [cId, setCId] = useState();

  useEffect(() => {
    getSignature();
  }, []);

  const getSignature = async () => {
    let id = localStorage.getItem("myot_admin_id");
    setCId(id);
    let { data } = await SignatorySignatureList(id);
    console.log(data);
    if (!data?.error) {
      setSignatureList(data?.results?.signatureList);
    }
  };

  const handleFileSelection = async (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleSubmit = async () => {
    if (!files?.logo) {
      toast.error("Please select an image", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    const formData = new FormData();
    formData.append("signature", files?.logo);
    formData.append("creator_Id", cId);
    let { data } = await SignatoryUpdateSignature(formData);
    console.log(data);
    if (!data?.error) {
      toast(data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      document.getElementById("reset").click();
      setFiles([]);
      getSignature();
    }
  };
  return (
    <div className="container px-4 text-center min-vh-100 ">
      <div className="row rounded">
        <div className="bg-white rounded mb-4 p-4 pb-2">
          <div>
            <p className="settings-txt">Signature Version</p>
            <div className="row">
              {signatureList &&
                signatureList?.map((signature) => (
                  <div className="col-3 my-2 signature_logos">
                    <img
                      className="w-100 border border-1 border-secondary rounded h-100 object-fit-contain"
                      src={signature?.signature}
                      alt="logo"
                    />
                  </div>
                ))}
            </div>
            <div className="my-4">
              <div>
                <p className="settings-txt mt-3">Upload Signature</p>
                <label htmlFor="logo" className="w-100">
                  <input
                    type="file"
                    defaultValue=""
                    id="logo"
                    name="logo"
                    className="d-none"
                    onChange={(e) => handleFileSelection(e, "logo")}
                  />
                  <div className="dashed_border w-100 py-5">
                    <div>
                      {/* <img src={require("../../assets/logo/img.png")} alt="" /> */}
                    </div>
                    <p className="py-3">
                      Drag and drop logo here, or click add image
                    </p>
                    <button onClick={handleSubmit} className="blue_btn">
                      Add Image
                    </button>
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
  );
};

export default SignatureManag;
