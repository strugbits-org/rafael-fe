// UPDATES PAGE TYPES
interface annoucements {
  title: string;
  description: string;
  profilePic: string;
  userName: string;
}

interface bestEmployee {
  name: string;
  image: string;
}

// REMINDERS PAGE TYPES

interface reminder {
  title: string;
  description: string;
  image: string;
}

//Meeting Agenda page types

type AgendaTableHeader = string[];
interface Speaker {
  name: string;
  avatarUrl: string;
}

interface ScheduleItem {
  time: string;
  speaker: Speaker;
  topic: string;
  duration: number;
  badge?: string[];
}

export type {
  annoucements,
  bestEmployee,
  reminder,
  ScheduleItem,
  AgendaTableHeader,
};
