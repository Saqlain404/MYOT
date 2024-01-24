import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const DashboardTemplateGraph = ({ dashGraphData }) => {
  const [state, setState] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          stroke: {
            show: true,
            width: 40, // Adjust the width as needed
            colors: ["transparent"],
            lineCap: "round",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      colors: ["#000000", "#95A4FC", "#BAEDBD", "#00FF00"],
    },
  });

  useEffect(() => {
    console.log(dashGraphData);
    if (dashGraphData) {
      const seriesData = [];
      const categories = [];

      
      

      Object.keys(dashGraphData).forEach((key) => {
        // if (dashGraphData[key] && Array.isArray(dashGraphData[key])) {
          const count = dashGraphData[key] || 0;
          seriesData.push(count);
          // Map key to a label
          const label =
            key === "approvedPresent"
              ? "Approved"
              : key === "completePresent"
              ? "Complete"
              : key === "rejectedPresent"
              ? "Rejected"
              : key === "pendingPresent"
              ? "Active"
              : "Other";
          categories.push(label);
        // }
      });

      setState((prevState) => ({
        ...prevState,
        series: seriesData,
        options: {
          ...prevState.options,
          labels: categories,
        },
      }));
    }
  }, [dashGraphData]);

  return (
    <div className="d-flex justify-content-around">
      <div className="dashboard_graph">
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={320}
            // height={300}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
};

export default DashboardTemplateGraph;
