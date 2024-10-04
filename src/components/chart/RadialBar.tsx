import ReactApexChart from "react-apexcharts";
import { getContinentCounts, getCountryCounts } from "../../utils";
import { particapantsGeoData } from "../../data/DashboardData";
import { Flex } from "antd";
import Paragraph from "../common/Paragraph";
import { useSnapshot } from "valtio";
import state from "../../store/store";

// Define the type for the viewMode prop
type viewMode = "countries" | "continents";

const RadialBar = ({ viewMode }: { viewMode: viewMode }) => {
  // Get the current state snapshot
  const snap = useSnapshot(state);

  // Get data for continents
  const totalContinents = getContinentCounts(particapantsGeoData);
  const continentData = {
    series: Object.values(totalContinents),
    labels: Object.keys(totalContinents),
  };

  // Get data for countries
  const totalCountries = getCountryCounts(particapantsGeoData);
  const countryData = {
    series: Object.values(totalCountries),
    labels: Object.keys(totalCountries),
  };

  // Function to generate colors dynamically
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

    // If we need more colors than predefined, generate random colors
    if (numItems > predefinedColors.length) {
      return [
        ...predefinedColors,
        ...Array(numItems - predefinedColors.length)
          .fill(null)
          .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16)),
      ];
    }

    return predefinedColors.slice(0, numItems);
  };

  // Select data and colors based on view mode
  const chartData = viewMode === "continents" ? continentData : countryData;
  const totalParticipants = chartData.series.reduce((a, b) => a + b, 0);
  const colors = generateColors(chartData.series.length);

  // ApexChart options configuration
  const options = {
    series: chartData.series.map((e) =>
      Number(((e / totalParticipants) * 100).toFixed(2))
    ),
    chart: {
      height: 350,
      type: "radialBar" as const,
    },
    plotOptions: {
      radialBar: {
        track: {
          background: snap.darkMode ? "#292929" : "#d0d5db",
        },
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
              return totalParticipants.toString();
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
      {/* LABELS, COLORS, AND COUNTS */}
      <Flex
        vertical
        className="flex-grow xl:pr-10 max-w-[400px]"
        justify="space-between"
        gap={10}
      >
        {chartData.labels.map((label, index) => (
          <Flex key={label} flex={1} justify="space-between" align="center">
            {/* Color indicator */}
            <Flex gap={5}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: colors[index],
                  marginRight: "10px",
                }}
              ></div>
              {/* Label and count */}
              <Paragraph className="text-black dark:text-white text-[13px] md:text-[14px] xl:text-[15px] font-[200]">
                {label}
              </Paragraph>
            </Flex>

            <Paragraph className="text-black dark:text-white text-[13px] md:text-[14px] xl:text-[15px] font-[200]">
              {chartData.series[index] < 10
                ? `0${chartData.series[index]}`
                : chartData.series[index]}
            </Paragraph>
          </Flex>
        ))}
      </Flex>

      {/* Radial Bar Chart */}
      <Flex className="2xl:-mr-10">
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={300}
        />
      </Flex>
    </Flex>
  );
};

export default RadialBar;
