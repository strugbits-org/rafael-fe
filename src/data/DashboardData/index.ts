import {
  AttendanceCardDataType,
  FilterCountry,
  Location,
  MarkerData,
  meetingCardDetails,
  particapantsGeoDataType,
  participantsDataType,
  Weather,
} from "../../@types";
import ukFlag from "../../assets/images/uk.png";
import ford from "../../assets/images/ford.png";
import yale from "../../assets/images/yale.jpeg";
import insta from "../../assets/images/insta.png";
import fb from "../../assets/images/fbicon.png";
import linkedin from "../../assets/images/ld.png";

// MEETING-CARD DATA
const meetingCardDeatils: meetingCardDetails = {
  startTime: "10:10 am",
  endTime: "10:55 am",
  meetingTitle: "Weekly sync meeting",
  speaker: {
    name: "Michael Jennings",
    avatarUrl:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    designation: "Global Division Officer",
  },
  date: "15 August",
  day: "Thursday",
  meetingType: "Internal meeting",
  duration: 45,
  badge: [
    "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
  ],
  socialLinks: [
    //SOCIAL LINKS
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

//AttendanceCard DATA

const AttendanceCardData: AttendanceCardDataType = {
  invited: 10,
  accepted: 6,
  tentative: 4,
  declined: 2,
  attendancePercentage: 60,
};
// WEATHER

const weatherData: Weather = {
  CTemp: "32",
  FTemp: "89",
  condition: "cloudy",
  address: "London, UK",
};

//LOCATIONS

const dummyMarkers: MarkerData[] = [
  {
    id: 1,
    position: { lat: 51.5074, lng: -0.1278 },
    title: "London",
    description: "LONDON IS THE CAPITAL OF GREAT KINGDOM",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    flag: ukFlag,
  },
  {
    id: 2,
    position: { lat: 31.5497, lng: 74.3436 },
    title: "Badshahi ",
    description: "Iconic Mughal-era",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    flag: ukFlag,
  },
  {
    id: 3,
    position: { lat: 52.5209, lng: 13.4094 },
    title: "Berlin Tower",
    description: "Berlin Tower is the tallest tower in the world",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    flag: ukFlag,
  },
];

const defaultLocation: Location = {
  lat: 31.5204,
  lng: 74.3587,
};

//PARTICAPANTS
const particapantsGeoData: particapantsGeoDataType[] = [
  {
    country: "USA",
    continent: "North America",
  },
  {
    country: "Canada",
    continent: "North America",
  },
  {
    country: "Germany",
    continent: "Europe",
  },
];

const filterCountryData: FilterCountry[] = [
  {
    name: "UK",
    code: "UK",
  },
  {
    name: "USA",
    code: "USA",
  },

  {
    name: "Canada",
    code: "CAN",
  },
  {
    name: "Germany",
    code: "GER",
  },
];

//PARTICAPANTS-FULL-DATA

const participantsData: participantsDataType[] = [
  {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    badge: [
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    ],
    jobTitle: "Software Engineer",
    location: "New York, USA",
    timeZone: "Pacific Standard Time (PST)",
    localTime: "11:00 AM",
    timeCalc: "Your time is 2h behind",
    weather: {
      CTemp: "32",
      FTemp: "89",
      condition: "rainy",
    },
    flag: ukFlag,
    organiser: true,
    company: {
      name: "Ford Motor Company",
      img: ford,
    },
    university: { name: "Yale University", img: yale },
    socialLinks: [
      {
        link: "https://www.instagram.com/",
        type: "instagram",
      },
      {
        link: "https://www.facebook.com/",
        type: "facebook",
      },
      {
        link: "https://www.linkedin.com/",
        type: "linkedin",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    badge: [
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    ],
    jobTitle: "Graphic Designer",
    location: "London, UK",
    timeZone: "Pacific Standard Time (PST)",
    localTime: "2:00 AM",
    timeCalc: "Your time is 11h behind",
    weather: {
      CTemp: "12",
      FTemp: "51",
      condition: "cloudy",
    },
    flag: ukFlag,
    organiser: false,
    company: {
      name: "Ford Motor Company",
      img: ford,
    },
    university: { name: "Yale University", img: yale },
    socialLinks: [
      {
        link: "https://www.instagram.com/",
        type: "instagram",
      },
      {
        link: "https://www.facebook.com/",
        type: "facebook",
      },
      {
        link: "https://www.linkedin.com/",
        type: "linkedin",
      },
    ],
  },
  {
    id: 3,
    name: "Sarah Smith",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    badge: [
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    ],
    jobTitle: "Software Engineer",
    location: "New York, USA",
    timeZone: "Pacific Standard Time (PST)",
    localTime: "11:00 AM",
    timeCalc: "Your time is 2h behind",
    weather: {
      CTemp: "32",
      FTemp: "89",
      condition: "windy",
    },
    flag: ukFlag,
    organiser: false,
    company: {
      name: "Ford Motor Company",
      img: ford,
    },
    university: { name: "Yale University", img: yale },
    socialLinks: [
      {
        link: "https://www.instagram.com/",
        type: "instagram",
      },
      {
        link: "https://www.facebook.com/",
        type: "facebook",
      },
      {
        link: "https://www.linkedin.com/",
        type: "linkedin",
      },
    ],
  },
  {
    id: 4,
    name: "King Kong",
    profilePic:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    badge: [
      "https://i.pinimg.com/originals/e6/69/e5/e669e5304f0925a9072741069c9cdf7d.png",
    ],
    jobTitle: "Software Engineer",
    location: "New York, USA",
    timeZone: "Pacific Standard Time (PST)",
    localTime: "11:00 AM",
    timeCalc: "Your time is 2h behind",
    weather: {
      CTemp: "32",
      FTemp: "89",
      condition: "snowy",
    },
    flag: ukFlag,
    organiser: false,
    company: {
      name: "Ford Motor Company",
      img: ford,
    },
    university: { name: "Yale University", img: yale },
    socialLinks: [
      {
        link: "https://www.instagram.com/",
        type: "instagram",
      },
      {
        link: "https://www.facebook.com/",
        type: "facebook",
      },
      {
        link: "https://www.linkedin.com/",
        type: "linkedin",
      },
    ],
  },
];

export {
  particapantsGeoData,
  dummyMarkers,
  meetingCardDeatils,
  defaultLocation,
  weatherData,
  filterCountryData,
  participantsData,
  AttendanceCardData,
};
