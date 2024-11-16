export type CountryApiType = {
  countryCode: string;
  name: string;
};

export type BorderCountryInfoType = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
};

export type historicalPopulationCountsType = {
  year: number;
  value: number;
};

export type CountryInfoType = {
  name: string;
  borders: BorderCountryInfoType[];
  historicalPopulationCounts: historicalPopulationCountsType[];
  flagUrl: string;
};
