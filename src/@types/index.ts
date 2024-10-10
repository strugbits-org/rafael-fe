// DASHBOARD TYPES

interface particapantsGeoDataType {
  country: string;
  continent: string;
}

type socialIconType = "facebook" | "instagram" | "linkedin";
interface socialLinksType {
  icon?: string;
  link: string;
  type: socialIconType;
}

interface meetingCardDetails {
  startTime: string;
  endTime: string;
  meetingTitle: string;
  speaker: {
    name: string;
    designation: string;
    avatarUrl: string;
  };
  date: string;
  day: string;
  meetingType: string;
  duration: number;
  badge: string[];
  socialLinks: socialLinksType[];
}

interface AttendanceCardDataType {
  invited: number;
  accepted: number;
  tentative: number;
  declined: number;
  attendancePercentage: number;
}

interface Location {
  lat: number;
  lng: number;
}

interface MarkerData {
  id: number;
  position: Location;
  title: string;
  description: string;
  profilePic: string;
  flag: string;
}

interface Weather {
  CTemp: string;
  condition: WeatherCondition;
  FTemp: string;
  address?: string;
}

interface FilterCountry {
  name: string;
  code: string;
}

interface participantsDataType {
  id: number;
  name: string;
  profilePic: string;
  location: string;
  flag: string;
  jobTitle: string;

  timeZone: string;
  localTime: string;
  timeCalc: string;
  weather: Weather;
  badge: string[];
  organiser: boolean;
  university?: {
    name: string;
    img: string;
  };
  company?: {
    name: string;
    img: string;
  };
  socialLinks: socialLinksType[];
}

type WeatherCondition = "sunny" | "cloudy" | "rainy" | "snowy" | "windy";

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
  designation?: string;
}

interface ScheduleItem {
  time?: string;
  speaker: Speaker;
  topic: string;
  duration: number;
  badge?: string[];
  day?: string;
  date?: string;
  month?: string;
  description?: string;
  keyPoints?: string[];
  designation?: string;
  endTime?: string;
}

interface meetingDeatilsType extends ScheduleItem {
  meetingTitle: string;
  startTime: string;
  endTime: string;
  date: string;
  day: string;
  meetingType: string;
  socialLinks: socialLinksType[];
  month: string;
}

export type {
  annoucements,
  bestEmployee,
  reminder,
  ScheduleItem,
  AgendaTableHeader,
  meetingDeatilsType,
  particapantsGeoDataType,
  MarkerData,
  Location,
  Weather,
  FilterCountry,
  WeatherCondition,
  participantsDataType,
  meetingCardDetails,
  AttendanceCardDataType,
  socialIconType,
};
