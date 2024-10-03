// DASHBOARD TYPES

interface particapantsGeoDataType {
  country: string;
  continent: string;
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
}

interface meetingDeatilsType extends ScheduleItem {
  meetingTitle: string;
  startTime: string;
  endTime: string;
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
};
