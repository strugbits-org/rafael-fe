import { Col, Divider, Flex, Row } from "antd";
import Container from "../common/Container";
import { IoArrowBackSharp } from "react-icons/io5";
import { ScheduleItem } from "../../@types";
import { Box } from "./box";
import Paragraph from "../common/Paragraph";

interface MeetingPersonDetailsProps {
  data: ScheduleItem | null;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const MeetingPersonDetails = ({
  setShowDetails,
  data,
}: MeetingPersonDetailsProps) => {
  return (
    <Container>
      {/* BACK BUTTON */}
      <button
        onClick={() => setShowDetails(false)}
        className=" dark:text-white text-black text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]"
      >
        <IoArrowBackSharp size={24} />
      </button>

      {/* MAIN CONTAINER */}
      <Box className="lg:px-16 pt-10 pb-12 px-5 dark:bg-[#1f1f1f]  bg-slate-200  mt-6 rounded-[16px]">
        <Flex vertical gap={16} className="max-w-[1800px] mx-auto">
          <Row gutter={[50, 24]} align={"middle"} justify={"start"}>
            {/* TOPIC, DATE, DESCRIPTION */}
            <Col
              xs={{
                span: 24,
              }}
              sm={{
                span: 24,
              }}
              md={{
                span: 24,
              }}
              lg={{
                span: 12,
              }}
              xxl={{
                span: 12,
              }}
            >
              <Flex vertical gap={24}>
                {/*  TOPIC */}
                <h1 className=" dark:text-white font-segoe text-black text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] font-[600]">
                  {data?.topic}
                </h1>
                {/* DATE */}
                <Flex
                  className="bg-[#2A85FF] max-w-[350px] dark:text-white text-black  rounded-md justify-between p-4 text-[14px] lg:text-[16px] uppercase  flex-col sm:flex-row  font-[500]"
                  align="center"
                >
                  <Paragraph>{data?.day}</Paragraph>
                  <Divider type="vertical" className="bg-white h-6" />
                  <Paragraph>
                    {data?.date} {data?.month}
                  </Paragraph>
                  <Divider type="vertical" className="bg-white h-6" />

                  <Paragraph>{data?.time}</Paragraph>
                </Flex>

                {/* DESCRIPTION */}
                <Flex
                  vertical
                  gap={8}
                  className=" rounded-md  text-[14px] lg:text-[16px]    dark:text-white text-black "
                >
                  <h5 className="font-[600] font-segoe">Description</h5>
                  {/* PASS DESCRIPTION DATA HERE */}
                  <Paragraph>{data?.description}</Paragraph>

                  <Flex vertical gap={4}>
                    <Paragraph>Key points:</Paragraph>

                    {/* KEY POINTS ARRAY HERE */}

                    <ul className="list-disc list-inside font-segoe">
                      {data?.keyPoints?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </Flex>
                </Flex>
                {/* TIME | DURATION */}
                <Flex
                  vertical
                  className="text-[14px] dark:text-white text-black lg:text-[16px]"
                  gap={5}
                >
                  <h6 className=" font-[600] font-segoe">Duration</h6>
                  <Paragraph>
                    {data?.time} - {data?.endTime} ({data?.duration} minutes)
                  </Paragraph>
                </Flex>

                {/* SPEAKER */}

                <Flex vertical gap={3} className="dark:text-white text-black">
                  <h6 className=" text-[#2A85FF] font-segoe  text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-[600]">
                    {data?.speaker.name}
                  </h6>
                  <Paragraph className="   text-[14px] lg:text-[16px]     ">
                    {data?.designation}
                  </Paragraph>
                  {data && data.badge?.length && (
                    <Box className="flex space-x-1">
                      {data.badge.map((badge, index) => (
                        <Box
                          key={index}
                          className="w-6 h-6 bg-gray-50 rounded-full overflow-hidden"
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={badge}
                            alt="Badge"
                          />
                        </Box>
                      ))}
                    </Box>
                  )}
                </Flex>
              </Flex>
            </Col>

            {/* SPEAKER IMAGE */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
            >
              <Box className="p-2 border-[#DBDBDB] border-[4px] rounded-full   max-h-[520px] max-w-[520px] mx-auto">
                <Box className="rounded-full max-w-[500px] max-h-[500px] overflow-hidden">
                  <img
                    className="w-full "
                    src={data?.speaker.avatarUrl}
                    alt={`Picture of ${data?.speaker.name}`}
                    width={"100%"}
                  />
                </Box>
              </Box>
            </Col>
          </Row>
        </Flex>
      </Box>
    </Container>
  );
};

export default MeetingPersonDetails;
