import { particapantsGeoDataType } from "../@types";

//GET CONTINENTs COUNT
interface dataCount {
  [key: string]: number;
}
function getContinentCounts(data: particapantsGeoDataType[]) {
  const continentCount: dataCount = {};

  data.forEach((participant) => {
    const continent = participant.continent;
    if (continentCount[continent]) {
      continentCount[continent]++;
    } else {
      continentCount[continent] = 1;
    }
  });

  return continentCount;
}

//get Counntries
const getCountryCounts = (data: particapantsGeoDataType[]) => {
  const countryCount: dataCount = {};
  data.forEach((participant) => {
    const country = participant.country;
    if (countryCount[country]) {
      countryCount[country]++;
    } else {
      countryCount[country] = 1;
    }
  });
  return countryCount;
};
export { getContinentCounts, getCountryCounts };
