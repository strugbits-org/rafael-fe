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
