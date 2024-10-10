import {
  AgendaTableHeader,
  meetingDeatilsType,
  ScheduleItem,
} from "../../@types";
import insta from "../../assets/images/insta.png";
import fb from "../../assets/images/fbicon.png";
import linkedin from "../../assets/images/ld.png";

//MEETING AGENDA DATA

const meetingDeatils: meetingDeatilsType = {
  startTime: "10:10 am",
  endTime: "10:55 am",
  meetingTitle: "Weekly sync meeting",
  speaker: {
    name: "Michael Jennings",
    avatarUrl:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    designation: "Global Division Officer",
  },

  topic: "Building Editors in the Browser",
  duration: 45,
  badge: [
    "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
  ],
  meetingType: "Internal Meeting",
  date: "15",
  month: "Aug",
  day: "Thursday",
  socialLinks: [
    {
      icon: insta,
      link: "https://www.instagram.com/",
      type: "instagram",
    },
    {
      icon: fb,
      link: "https://www.facebook.com/",
      type: "facebook",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/",
      type: "linkedin",
    },
  ],
};

const AgendaTableHeaderData: AgendaTableHeader = [
  "Time",
  "Speaker",
  "Topic",
  "Duration",
  "Details",
];

const scheduleData: ScheduleItem[] = [
  {
    time: "10:10 am",
    speaker: {
      name: "Michael Jennings",
      avatarUrl:
        "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    },
    topic: "Building Editors in the Browser",
    duration: 10,
    badge: [
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    ],
    day: "Thursday",
    date: "15",
    month: "August",
    description:
      " Employee wellness programs are becoming increasingly important as companies recognize the value of a healthy and  engaged workforce. By investing in wellness initiatives, businesses can reduce absenteeism, improve productivity, and create a more positive work environment.",
    keyPoints: ["Physical wellness", "Physical wellness", "Physical wellness"],
    endTime: "10:35 am",
    designation: "Director of employee wellness",
  },
  {
    time: "10:20 am",
    speaker: {
      name: "David Nguyen",
      avatarUrl:
        "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    },
    topic: "Enhancing Workplace Wellness Programs",
    duration: 2,
    day: "Thursday",
    date: "15",
    month: "August",
    description:
      " Employee wellness programs are becoming increasingly important as companies recognize the value of a healthy and  engaged workforce. By investing in wellness initiatives, businesses can reduce absenteeism, improve productivity, and create a more positive work environment.",
    keyPoints: ["Physical wellness", "Physical wellness", "Physical wellness"],
    endTime: "10:35 am",
    designation: "Director of employee wellness",
  },
  {
    time: "10:35 am",
    speaker: {
      name: "Sophia Carter",
      avatarUrl:
        "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    },
    topic: "The Future of Artificial Intelligence in Healthcare",
    duration: 3,
    day: "Thursday",
    date: "15",
    month: "August",
    description:
      " Employee wellness programs are becoming increasingly important as companies recognize the value of a healthy and  engaged workforce. By investing in wellness initiatives, businesses can reduce absenteeism, improve productivity, and create a more positive work environment.",
    keyPoints: ["Physical wellness", "Physical wellness", "Physical wellness"],
    endTime: "10:35 am",
    designation: "Director of employee wellness",
  },
  {
    time: "10:40 am",
    speaker: {
      name: "Peter Johns",
      avatarUrl:
        "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    },
    topic: "Cybersecurity in the Age of Digital Transformation",
    duration: 4,
    day: "Thursday",
    date: "15",
    month: "August",
    description:
      " Employee wellness programs are becoming increasingly important as companies recognize the value of a healthy and  engaged workforce. By investing in wellness initiatives, businesses can reduce absenteeism, improve productivity, and create a more positive work environment.",
    keyPoints: ["Physical wellness", "Physical wellness", "Physical wellness"],
    endTime: "10:35 am",
    designation: "Director of employee wellness",
  },
];

export { scheduleData, AgendaTableHeaderData, meetingDeatils };
