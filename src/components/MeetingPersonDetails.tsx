import { Col, Divider, Flex, Row } from "antd";
import Container from "./ui/Container";
import { IoArrowBackSharp } from "react-icons/io5";
import { ScheduleItem } from "../@types";
import { Box } from "./ui/box";

interface MeetingPersonDetailsProps {
  data: ScheduleItem | null;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const MeetingPersonDetails = ({
  setShowDetails,
  data,
}: MeetingPersonDetailsProps) => {
  console.log("data", data);

  return (
    <Container>
      <button
        onClick={() => setShowDetails(false)}
        className=" text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]"
      >
        <IoArrowBackSharp size={24} />
      </button>
      <Box className="px-16 py-10  bg-[#1F1F1F] mt-6 rounded-[16px]">
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
                <h1 className=" text-white text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] font-[600]">
                  {data?.topic}
                </h1>
                {/* DATE */}
                <Flex
                  className="bg-[#2A85FF] max-w-[400px]  rounded-md justify-between p-4 text-[14px] lg:text-[16px] uppercase  flex-col sm:flex-row  font-[500]"
                  align="center"
                >
                  <p>Thursday</p>
                  <Divider type="vertical" className="bg-white h-6" />
                  <p>15 August</p>
                  <Divider type="vertical" className="bg-white h-6" />

                  <p>{data?.time}</p>
                </Flex>

                {/* DESCRIPTION */}
                <Flex
                  vertical
                  gap={8}
                  className=" rounded-md  text-[14px] lg:text-[16px]     "
                >
                  <h5 className="font-[600]">Description</h5>

                  <p>
                    Employee wellness programs are becoming increasingly
                    important as companies recognize the value of a healthy and
                    engaged workforce. By investing in wellness initiatives,
                    businesses can reduce absenteeism, improve productivity, and
                    create a more positive work environment.
                  </p>

                  <Flex vertical gap={4}>
                    <p>Key points:</p>
                    <ul className="list-disc list-inside">
                      <li>Physical wellness</li>
                      <li>Physical wellness</li>
                      <li>Physical wellness</li>
                    </ul>
                  </Flex>
                </Flex>
                {/* DURATION */}
                <Flex vertical className="text-[14px] lg:text-[16px]" gap={5}>
                  <h6 className=" font-[600]">Duration</h6>
                  <p>10:20 AM - 10:35 AM ({data?.duration} minutes)</p>
                </Flex>

                {/* SPEAKER */}

                <Flex vertical gap={3}>
                  <h6 className=" text-[#2A85FF] text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-[600]">
                    {data?.speaker.name}
                  </h6>
                  <p className="   text-[14px] lg:text-[16px]     ">
                    Director of employee wellness
                  </p>
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
              <Box className="p-2 border-[#DBDBDB] border-[4px] rounded-full w-fit mx-auto">
                <Box className="rounded-full max-w-[650px] max-h-[650px] overflow-hidden">
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
