import { Flex } from "antd";

import Container from "../components/ui/Container";
import ReminderCard from "../components/ReminderCard";
import { remindersData } from "../data/ReminderData";

const Reminder = () => {
  return (
    <Container>
      <Flex vertical gap={12}>
        <h1 className=" text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]">
          Reminders
        </h1>
        <p className=" text-white text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400]">
          For detailed information about our policies and to access our
          comprehensive training materials,{" "}
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            className="text-[#2A85FF] underline"
          >
            please click here.{" "}
          </a>
        </p>
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
