import React, { useEffect, useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { TemplateDetails } from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const ViewTemp = ({ viewTemplateId }) => {
  const [tempData, setTempData] = useState();
  const [pdfUrl, setPdfUrl] = useState("");

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    if (viewTemplateId) {
      viewTempData();
    }
  }, [viewTemplateId]);

  let viewTempData = async () => {
    let { data } = await TemplateDetails(viewTemplateId);
    console.log(data);
    if (!data?.error) {
      setTempData(data?.results?.templete);
      await setPdfUrl(data?.results?.templete?.templete[0]);
    }
  };
  return (
    <div class="modal-body view_temp_modal">
      <div className="row">
        <div className="text-end">
          <p>
            Status : <span className="text-warning">{tempData?.status}</span>
          </p>
        </div>
        <div className="col-md-4">
          <p>Template Name : {tempData?.templeteName}</p>
        </div>
        <div className="col-md-4">
          <p>Assigned To : {tempData?.templeteName}</p>
        </div>
        <div className="col-md-4">
          <p>Created By : {tempData?.templeteName}</p>
        </div>
        <div className="my-4">
          {pdfUrl && (
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js`}
            >
              <div>
                <Viewer
                  // fileUrl={tempData?.templete[0]}
                  fileUrl={`${pdfUrl}`}
                  // fileUrl="http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053/17059962825372ocnt.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTemp;
