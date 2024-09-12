import { Col, Flex, Row } from "antd";
import Container from "../components/ui/Container";
import { Box } from "../components/ui/box";
import AnnouncementCard from "../components/AnnouncementCard";
import { announcementsData, bestEmployeeData } from "../data/AnnoucementData";
import { ReactNode } from "react";
import BestEmployeeCard from "../components/BestEmployeeCard";

type InnerContainer = {
  children: ReactNode;
  title: string;
};

const InnerContainer: React.FC<InnerContainer> = (
  { children, title } //inner container sections Announcements & celebrations
) => (
  <Flex
    className="xl:p-7 p-5 md:p-6 bg-[#1F1F1F] rounded-[12px]"
    vertical
    gap={16}
  >
    <Box>
      <h1 className=" text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]">
        {title}
      </h1>
    </Box>
    {children}
  </Flex>
);

const Anouncement = () => {
  return (
    <Container>
      <Flex gap={20} vertical>
        {/* ================ANNOUNCEMENTs Section================= */}
        <InnerContainer title="Announcements">
          <Flex vertical gap={20}>
            {/* ================ANNOUNCEMENTs CARD================= */}
            {announcementsData.map((announcement, index) => (
              <AnnouncementCard key={index} {...announcement} />
            ))}
          </Flex>
        </InnerContainer>

        {/* ===============CELEBRATIONS Section================= */}

        <InnerContainer title="Celebrations">
          <Row gutter={[16, 24]} align={"middle"} justify={"start"}>
            {/* ================BEST EMPLOYEE CARD================= */}
            {bestEmployeeData.map((employee, index) => (
              <Col
                key={index}
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
                  span: 8,
                }}
              >
                <BestEmployeeCard {...employee} />
              </Col>
            ))}
          </Row>
        </InnerContainer>
      </Flex>
    </Container>
  );
};

export default Anouncement;
