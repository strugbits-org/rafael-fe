import {
  FilterCountry,
  Location,
  MarkerData,
  particapantsGeoDataType,
  participantsDataType,
  Weather,
} from "../../@types";
import ukFlag from "../../assets/images/uk.png";
import ford from "../../assets/images/ford.png";
import yale from "../../assets/images/yale.jpeg";

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
    title: "Badshahi Mosque",
    description: "Iconic Mughal-era mosque",
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

// WEATHER

const weatherData: Weather = {
  CTemp: "32",
  FTemp: "89",
  condition: "rainy",
  address: "London, UK",
};

//PARTICAPANTS

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
  },
];

export {
  particapantsGeoData,
  dummyMarkers,
  defaultLocation,
  weatherData,
  filterCountryData,
  participantsData,
};
