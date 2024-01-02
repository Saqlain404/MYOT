import React from "react";
import ReactApexChart from "react-apexcharts";

const GradientBarChart = ({tempData}) => {
  const initialData = [
    80, 55, 41, 67, 22, 35, 50, 20, 20, 20, 2, 0, 20, 2, 25, 5, 4, 5,
  ];

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
      categories: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ],
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

  const series = [
    {
      data: initialData,
    },
  ];

  // console.log(series[0].data?.length);
  return (
    <>
      <div className="charts ps-3">
        <p className="mb-0">Daily Traffic</p>
        <p>
          <span>2547</span> Vistors
        </p>
      </div>
      <div style={{ overflow: "auto" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={400}
          width={series[0].data?.length * 80}
        />
      </div>
    </>
  );
};

export default GradientBarChart;
