import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import GradientBarChart from "./GradientBarChart";
import GradientLineChart from "./GradientLineChart";
import { AnalyticsData } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    getAnalyticsData();
  }, []);

  const getAnalyticsData = async () => {
    let id = localStorage.getItem('myot_admin_id');
    let { data } = await AnalyticsData(id);
    console.log(data);
    if (!data?.error) {
      setAnalyticsData(data?.results);
      console.log(data)
    }
  };

  // const [chartData, setChartData] = useState({
  //   series: [],
  //   options: {
  //     labels: [],
  //     legend: {
  //       show: true,
  //       position: "top-end",
  //     },
  //     colors: ["#6AD2FF", "#4318FF", "#EFF4FB"],
  //   },
  // });

  // const data = [
  //   {
  //     name: "Documents",
  //     quantity: 65,
  //   },
  //   {
  //     name: "Users",
  //     quantity: 35,
  //   },
  //   {
  //     name: "Departments",
  //     quantity: 25,
  //   },
  // ];

  // useEffect(() => {
  //   let names = [];
  //   let quantities = [];
  //   data.forEach(function (n) {
  //     names.push(n.name);
  //     quantities.push(n.quantity);
  //   });

  //   setChartData({
  //     ...chartData,
  //     series: quantities,
  //     options: {
  //       ...chartData.options,
  //       labels: names,
  //     },
  //   });
  // }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                  <a className="nav-link fw-bold">Analytics / Report Management</a>
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
            <div className="d-flex">
              <Link className="text-decoration-none">
                <p className="td-text border-bottom me-3">Template Usage</p>
              </Link>
              <Link className="text-decoration-none">
                <p className="th-text  ">Employee Activity</p>
              </Link>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-12 bg-light rounded my-5 py-5">
                  <GradientLineChart
                  tempData={analyticsData?.totalTemplete}
                    // activeUserData={analyticsData?.totalActiveUser}
                  />
                </div>
                <div className="col-md-12 bg-light rounded mb-5 py-5">
                  <div className="row">
                    <div className="col-md-12">
                      <GradientBarChart
                        // tempData={analyticsData?.totalTemplete}
                        activeUserData={analyticsData?.totalActiveUser}
                      />
                    </div>
                    {/* <div className="col-md-6">
                      <div className="w-100 py-4" id="chart">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="pie_chart_text">
                            <p>Your Pie Chart</p>
                          </div>
                          <div>
                            <select name="" id="" className="border-0 px-3 py-1">
                              <option value="">Weekly</option>
                              <option value="">Monthly</option>
                              <option value="">Yearly</option>
                            </select>
                          </div>
                        </div>
                        <ReactApexChart
                          options={chartData.options}
                          series={chartData.series}
                          type="pie"
                        />
                      </div>
                    </div> */}
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

export default Analytics;
