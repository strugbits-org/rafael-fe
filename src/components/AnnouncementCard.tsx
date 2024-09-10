import { Flex } from "antd";
import { annoucements } from "../@types";
import { Box } from "./ui/box";

const AnnouncementCard = ({
  title,
  description,
  profilePic,
  userName,
}: annoucements) => {
  return (
    <Flex className="p-4 w-full bg-[#3B3B3B] rounded-[12px]" vertical gap={12}>
      <h5 className=" text-white text-[14px] md:text-[15px] xl:text-[16px] font-[600]">
        {title}
      </h5>

      <p className=" text-white text-[12px] md:text-[13px] xl:text-[14px] font-[400]">
        {description}
      </p>

      <Flex align="center" gap={10}>
        <Box className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={profilePic} alt="PROFILE_PIC" className="w-full" />
        </Box>
        <Box>
          <p className=" text-white text-[12px] md:text-[13px] xl:text-[14px] font-[400]">
            {userName}
          </p>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AnnouncementCard;

AnnouncementCard.defaultProps = {
  profilePic:
    "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
  userName: "Rafael Dominguez",
  title: "Exciting news: project phoenix has launched!",
  description: `We are thrilled to announce the launch of project phoenix, a groundbreaking initiative aimed at revolutionizing our approach to customer engagement. This project represents months of hard work and collaboration across teams. Stay tuned for more updates and how you can get involved!`,
};
