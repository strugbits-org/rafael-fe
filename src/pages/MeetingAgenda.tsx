import { Flex } from "antd";
import Container from "../components/common/Container";

import { useEffect, useState } from "react";
import MeetingPersonDetails from "../components/ui/MeetingPersonDetails";
import { ScheduleItem } from "../@types";
import MeetingStrip from "../components/ui/MeetingStrip";
import { AnimatePresence, motion } from "framer-motion";
import ConferenceScheduleTable from "../components/table/ConferenceScheduleTable";

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

  useEffect(() => {
    const mainLayout = document.querySelector("#mainLayout") as HTMLElement;
    mainLayout.scrollTo({ top: 0, behavior: "smooth" });
  }, [showDetails]);

  return (
    <Container>
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Flex className="xl:p-7 p-4 md:p-6 " vertical gap={32}>
              <MeetingStrip />
              <Flex className="dark:bg-[#1f1f1f]  bg-slate-200 rounded-[12px] flex-col gap-7 xl:p-7 p-4 md:p-6 ">
                <h1 className=" dark:text-white font-segoeBold text-black text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]">
                  Meeting Agenda
                </h1>
                <ConferenceScheduleTable onClick={detailClickHandler} />
              </Flex>
            </Flex>
          </motion.div>
        ) : (
          <motion.div
            key="detail-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MeetingPersonDetails
              data={details}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default MeetingAgenda;
