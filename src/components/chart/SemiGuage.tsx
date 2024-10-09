import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import state from "../../store/store";
import { useSnapshot } from "valtio";

const SemiGuage = () => {
  const snap = useSnapshot(state);
  const [series] = useState([25]);
  const labelColor = snap.darkMode ? "#fff" : "#000";

  const options = {
    chart: {
      type: "radialBar" as const,
      offsetY: -10,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#9CC6FE",
          strokeWidth: "100%",
          margin: 10, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: true,
            color: labelColor,
            offsetY: 10,
            fontSize: "14px",
            fontFamily: "Segoe UI BOLD",
          },
          value: {
            offsetY: -30,

            fontSize: "24px",
            fontFamily: "segoe ui",
            color: labelColor,
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "solid",
      colors: ["#2b84ff"],
    },
    labels: ["Attendance"],
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={200}
      />
    </div>
  );
};

export default SemiGuage;
