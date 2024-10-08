import { meetingDeatilsType } from "../@types";

interface SidebarItem {
  route: string;
  icon: string;
  label: string;
}

export const sidebarList: SidebarItem[] = [
  {
    label: "Dashboard",
    route: "/",
    icon: "dashboard",
  },
  {
    label: "Agenda",
    route: "/agenda",
    icon: "agenda",
  },
  {
    label: "Reminders",
    route: "/reminders",
    icon: "reminders",
  },
  {
    label: "Celebration/Updates",
    route: "/updates",
    icon: "updates",
  },
];

//MEETING AGENDA DATA, ITS HERE BECAUSE IT IS USED IN BOTH MEETING AGENDA AND DASHBOARD PAGE

export const meetingDeatils: meetingDeatilsType = {
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
  ],
};
