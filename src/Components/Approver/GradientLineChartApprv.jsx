import React from "react";
import Chart from "react-apexcharts";

const GradientLineChartApprv = ({ tempData }) => {

  const getMonthName = (monthNumber) => {
    const date = new Date(null);
    date.setUTCMonth(monthNumber - 1);
    return date.toLocaleString("default", { month: "short" });
  };

  console.log(tempData)
  // const generateAdditionalData = () => {
  //   const newData = [];
  //   if (Array.isArray(activeUserData) && activeUserData.length >0) {
  //     for (let i = 1; i <= 9; i++) {
  //       const newEntry = {
  //         _id: activeUserData[0]._id - i,
  //         activeUser: Math.floor(Math.random() * 20) + 10,
  //       };
  //       newData.push(newEntry);
  //     }
  //   }
  //   return newData.reverse();
  // };

  // const combinedData = [
  //   ...generateAdditionalData(),
  //   ...(Array.isArray(activeUserData) ? activeUserData : []),
  // ];

  const chartData = {
    series: [
      {
        name: "Templates",
        data: tempData?.map((data) => data?.templete),
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#FF5BEF"],
      stroke: {
        width: 7,
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: tempData?.map((data) => {
          const monthName = getMonthName(data._id);
          return `${monthName}`;
        }),
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 1,
          gradientToColors: ["#5BC4FF"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
    },
  };

  // console.log(chartData?.series);

  return (
    <div className="gradient-line-chart">
      <p className="ms-4 fw-bold">Total Templates</p>
      <div style={{ overflow: "auto" }}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="300"
          width={chartData?.series?.length * 650}
        />
      </div>
    </div>
  );
};

export default GradientLineChartApprv;
