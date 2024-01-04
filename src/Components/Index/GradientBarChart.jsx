import React from "react";
import ReactApexChart from "react-apexcharts";

const GradientBarChart = ({ activeUserData }) => {
  // const seriesData = [
  //   80, 55, 41, 67, 22, 35, 50, 20
  // ];
  const getMonthName = (monthNumber) => {
    const date = new Date(null);
    date.setUTCMonth(monthNumber - 1);
    return date.toLocaleString("default", { month: "short" });
  };

  const seriesData = activeUserData?.map((data) => data?.activeUser);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
        borderRadius: 15,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      // categories:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
      categories: activeUserData?.map((data) => {
        const monthName = getMonthName(data._id);
        return `${monthName}`;
      }),
    },
    colors: ["#4318FF47"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#4318FF"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    yaxis: {
      title: {
        text: "Values",
      },
    },
  };

  const series = [{ name: "Active Users", data: seriesData }];

  const chartWidth = Array.isArray(seriesData) ? seriesData.length * 80 : 0;
  // console.log(series[0].data?.length);
  return (
    <>
      <div className="charts ps-3">
        <p className="mb-0">Daily Traffic</p>
        <p>
          <span>2547</span> Vistors
        </p>
      </div>
      <div style={{ overflow: "auto", zIndex: "-1" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={400}
          width={chartWidth}
        />
      </div>
    </>
  );
};

export default GradientBarChart;
