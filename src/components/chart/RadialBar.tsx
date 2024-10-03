import ReactApexChart from "react-apexcharts";
import { getContinentCounts, getCountryCounts } from "../../utils";
import { particapantsGeoData } from "../../data/DashboardData";

import { Flex } from "antd";
import Paragraph from "../common/Paragraph";
import { useSnapshot } from "valtio";
import state from "../../store/store";

type viewMode = "countries" | "continents";

const RadialBar = ({ viewMode }: { viewMode: viewMode }) => {
  const snap = useSnapshot(state);

  // Data for continents
  const totalContinents = getContinentCounts(particapantsGeoData);
  const continentData = {
    series: Object.values(totalContinents),
    labels: Object.keys(totalContinents),
  };

  // Data for countries
  const totalCountries = getCountryCounts(particapantsGeoData);
  const countryData = {
    series: Object.values(totalCountries),
    labels: Object.keys(totalCountries),
  };

  // Dynamic color assignment
  const generateColors = (numItems: number) => {
    const predefinedColors = [
      "#1E90FF",
      "#FF6347",
      "#32CD32",
      "#FFD700",
      "#FF69B4",
      "#8A2BE2",
      "#00CED1",
      "#DC143C",
      "#FF4500",
      "#228B22",
    ];

    if (numItems > predefinedColors.length) {
      return [
        ...predefinedColors,
        ...Array(numItems - predefinedColors.length)
          .fill(null)
          .map(() => {
            const randomColor =
              "#" + Math.floor(Math.random() * 16777215).toString(16);
            return randomColor;
          }),
      ];
    }

    return predefinedColors.slice(0, numItems);
  };

  // Select data and colors based on view mode
  const chartData = viewMode === "continents" ? continentData : countryData;
  const totalParticipants = chartData.series.reduce((a, b) => a + b, 0);
  const colors = generateColors(chartData.series.length);

  // ApexChart options
  const options = {
    series: chartData.series.map(
      (e) => Number(((e / totalParticipants) * 100).toFixed(2)) // Ensure series is numeric
    ),
    chart: {
      height: 350,
      type: "radialBar" as const,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            color: snap.darkMode ? "white" : "black",
          },
          total: {
            show: true,
            label: "Total",
            color: snap.darkMode ? "white" : "black",
            formatter: function () {
              return chartData.series.reduce((a, b) => a + b, 0).toString(); // Convert number to string
            },
          },
        },
      },
    },
    colors: colors,
    labels: chartData.labels,
    track: {
      background: "#f44336",
      strokeWidth: "97%",
      margin: 5,
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: "#999",
        opacity: 1,
        blur: 2,
      },
    },
  };

  return (
    <Flex justify="space-between" id="chart" gap={20} wrap align="center">
      <Flex vertical gap={10}>
        {chartData.labels.map((label, index) => (
          <Flex
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: colors[index],
                marginRight: "10px",
              }}
            ></div>
            <Paragraph className="text-black dark:text-white text-[13px] md:text-[14px] xl:text-[15px] font-[400]">
              {label}
            </Paragraph>
          </Flex>
        ))}
      </Flex>

      {/* Radial Bar */}
      <ReactApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={350}
      />
    </Flex>
  );
};

export default RadialBar;
