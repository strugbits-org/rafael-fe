import { Flex } from "antd";
import Container from "../components/ui/Container";
import CustomTable from "../components/Table/ConferenceScheduleTable";
import { useState } from "react";
import MeetingPersonDetails from "../components/MeetingPersonDetails";
import { ScheduleItem } from "../@types";
import MeetingStrip from "../components/MeetingStrip";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Flex
              className="xl:p-7 p-4 md:p-6 dark:bg-[#1f1f1f]  bg-slate-200 rounded-[12px]"
              vertical
              gap={32}
            >
              <MeetingStrip />
              <CustomTable onClick={detailClickHandler} />
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
