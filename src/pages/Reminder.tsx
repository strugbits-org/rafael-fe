import { Flex } from "antd";

import Container from "../components/common/Container";
import ReminderCard from "../components/ui/cards/ReminderCard";
import { remindersData } from "../data/ReminderData";
import Paragraph from "../components/common/Paragraph";

const Reminder = () => {
  return (
    <Container>
      <Flex vertical gap={12} className="font-segoe">
        <h1 className=" dark:text-white text-black text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]">
          Reminders
        </h1>
        <Paragraph className=" dark:text-white text-black text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400]">
          For detailed information about our policies and to access our
          comprehensive training materials,{" "}
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            className="text-[#2A85FF] font-segoe underline"
          >
            please click here.{" "}
          </a>
        </Paragraph>
      </Flex>

      {/* =================REMINDER CARD================= */}

      <Flex className="mt-10 " wrap gap={20}>
        {remindersData.map((reminder, index) => (
          <ReminderCard key={index} {...reminder} />
        ))}
      </Flex>
    </Container>
  );
};

export default Reminder;
