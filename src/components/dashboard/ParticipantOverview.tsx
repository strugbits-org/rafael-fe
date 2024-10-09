import { Flex } from "antd";
import RadialBar from "../chart/RadialBar";
import Paragraph from "../common/Paragraph";
import CustomSelect from "../ui/CustomSelect";
import { useState } from "react";

const data = [
  { value: "continents", label: "Continents" },
  { value: "countries", label: "Countries" },
];

type typeViewMode = "countries" | "continents";
const ParticipantOverview = () => {
  const [viewMode, setViewMode] = useState<typeViewMode>("continents");
  console.log(viewMode);

  return (
    <Flex
      vertical
      gap={20}
      className="dark:bg-[#1f1f1f] bg-slate-200 rounded-[12px]  pt-5  lg:px-10 px-5 h-full"
    >
      <Flex justify="space-between" className="gap-y-5 flex-col 2xl:flex-row">
        <Flex vertical gap={10}>
          <Paragraph className="dark:text-white text-black text-[16px] md:text-[20px] xl:text-[24px] font-[400]">
            Participants overview
          </Paragraph>
          <p className="text-black font-segoe dark:text-[#828690] text-[13px] md:text-[14px] xl:text-[15px] font-[400]">
            This chart visualizes the geographical distribution of participants.
          </p>
        </Flex>
        <Flex>
          <CustomSelect
            options={data}
            onChange={(e: string) => setViewMode(e as typeViewMode)}
          />
        </Flex>
      </Flex>

      {/* RADIAL CHART  */}

      <RadialBar viewMode={viewMode} />
    </Flex>
  );
};

export default ParticipantOverview;
