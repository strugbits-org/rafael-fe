import { AgendaTableHeader, ScheduleItem } from "../../@types";

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
  },
];

export { scheduleData, AgendaTableHeaderData };
