import { Flex } from "antd";
import Container from "../components/ui/Container";
import { Box } from "../components/ui/box";
import CustomTable from "../components/CustomTable";
import { useState } from "react";
import MeetingPersonDetails from "../components/MeetingPersonDetails";
import { ScheduleItem } from "../@types";

const MeetingAgenda = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<ScheduleItem | null>(null);

  const detailClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    data: unknown
  ) => {
    if (e && data) {
      setShowDetails(true);
      setDetails(data as ScheduleItem);
    }
  };

  return (
    <Container>
      {!showDetails ? (
        <Flex
          className="xl:p-7 p-5 md:p-6 bg-[#1F1F1F] rounded-[12px]"
          vertical
          gap={32}
        >
          <Box>
            <h1 className=" text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]">
              Meeting Agenda
            </h1>
          </Box>
          <CustomTable onClick={detailClickHandler} />
        </Flex>
      ) : (
        <MeetingPersonDetails data={details} setShowDetails={setShowDetails} />
      )}
    </Container>
  );
};

export default MeetingAgenda;
