import { useState } from "react";
import Modal from "react-modal";

import { participantsDataType } from "../../@types";
import WeatherIcon from "./WeatherIconRender";
import { Flex } from "antd";
import { AnimatePresence, motion } from "framer-motion";

import InstaIcon from "../../assets/icons/insta";
import state from "../../store/store";
import FacebookIcon from "../../assets/icons/facebook";
import LinkedinIcon from "../../assets/icons/linkedin";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

const modalVariants = {
  // USER FOR ANIMATING MODAL
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const ParticipantDetailsModal = ({
  // CUSTOM MODAL USED ON PARTICIPANTS SECTION TO DISPLAY DETAILS
  data,
  fullWidthbtn,
}: {
  data: participantsDataType;
  fullWidthbtn: boolean;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // FOR OPENING AND CLOSING MODAL

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fullWidthButton = fullWidthbtn ? "w-full" : "w-auto"; // FOR MAKING BUTTON FULL WIDTH

  return (
    <>
      {/* MODAL BUTTON */}
      <button
        className={`bg-[#2A85FF] font-segoe ${fullWidthButton} rounded-[28px] text-white px-4 sm:px-6 lg:px-8 py-2 hover:bg-blue-600 transition-colors whitespace-nowrap`}
        onClick={openModal}
      >
        View details
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[#292929] bg-slate-200 text-black dark:text-white p-6 rounded-lg w-full max-w-[350px] md:max-w-[380px] lg:max-w-[460px]"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6 font-segoe">
                <h2 className="text-2xl font-bold">Details</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
              {/* User details */}
              {/* PICTURE AND NAME */}
              <Flex vertical className="items-center mb-6 font-segoe">
                <img
                  src={data.profilePic}
                  alt={data.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-[16px] font-semibold">{data.name}</h3>
                <p className="text-[12px] font-segoe text-gray-500 dark:text-[#DBDBDB]">
                  {data.jobTitle}
                </p>
                {data.organiser && (
                  <p className="dark:text-blue-400 font-segoe text-[12px] text-blue-400">
                    Organizer
                  </p>
                )}
              </Flex>
              {/* OTHER DETAILS */}
              <div className="space-y-4 text-[14px] font-segoe">
                {/* LOCATION */}
                <Flex className="justify-between items-center border-b dark:border-[#283042] border-[#DBDBDB] pb-2">
                  <span>Location</span>
                  <span className="flex items-center text-gray-500 dark:text-[#DBDBDB]">
                    <img
                      src={data.flag}
                      alt="flag"
                      className="mr-2 w-6 rounded-full"
                    />
                    {data.location}
                  </span>
                </Flex>
                {/* TIME */}
                <Flex className="justify-between items-center border-b dark:border-[#283042] border-[#DBDBDB] pb-2">
                  <span>Time</span>
                  <span className="text-gray-500 dark:text-[#DBDBDB]">
                    {data.localTime}
                  </span>
                </Flex>
                {/* WEATHER */}
                <Flex className="justify-between items-center border-b dark:border-[#283042] border-[#DBDBDB] pb-2">
                  <span>Weather</span>
                  <Flex
                    align="center"
                    gap={2}
                    className="text-gray-500 dark:text-[#DBDBDB]"
                  >
                    <WeatherIcon condition={data.weather.condition} />{" "}
                    {data.weather.CTemp}°C {data.weather.condition}
                  </Flex>
                </Flex>
                {/* BADGES */}
                <Flex className="justify-between items-center border-b dark:border-[#283042] border-[#DBDBDB] pb-2">
                  <span>Badges</span>
                  {data.badge?.length && (
                    <Flex className="flex space-x-1 pt-1">
                      {data.badge.map((badge, index) => (
                        <Flex
                          key={index}
                          className="w-5 h-5 bg-gray-50 rounded-full overflow-hidden"
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={badge}
                            alt="Badge"
                          />
                        </Flex>
                      ))}
                    </Flex>
                  )}
                </Flex>
                {/* COMPANY */}
                <Flex className="justify-between items-center border-b dark:border-[#283042] border-[#DBDBDB] pb-2">
                  <span>Company</span>
                  <span className="flex items-center text-gray-500 dark:text-[#DBDBDB]">
                    <img
                      src={data.company?.img}
                      alt={`${data.company?.name} logo`}
                      className="mr-2 w-6 rounded-full"
                    />
                    {data.company?.name}
                  </span>
                </Flex>
                {/* SCHOOL */}
                <Flex className="justify-between items-center border-b dark:border-[#283042] border-[#DBDBDB] pb-2">
                  <span>School</span>
                  <span className="flex items-center text-gray-500 dark:text-[#DBDBDB]">
                    <img
                      src={data.university?.img}
                      alt={`${data.university?.name} logo`}
                      className="mr-2 w-6 rounded-full"
                    />
                    {data.university?.name}
                  </span>
                </Flex>
                {/* SOCIAL LINKS */}
                <Flex className="justify-between items-center">
                  <span>Social Links</span>
                  <div className="flex space-x-2 ">
                    <InstaIcon color={state.darkMode ? "#DBDBDB" : "#000"} />
                    <FacebookIcon color={state.darkMode ? "#DBDBDB" : "#000"} />
                    <LinkedinIcon color={state.darkMode ? "#DBDBDB" : "#000"} />
                  </div>
                </Flex>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ParticipantDetailsModal;
