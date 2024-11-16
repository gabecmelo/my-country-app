"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { CountryApiType } from "../types";

type CountriesContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  countries: CountryApiType[];
  setCountries: (countries: CountryApiType[]) => void;
};

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<CountryApiType[]>([]);

  return (
    <CountriesContext.Provider value={{ loading, setLoading, countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
};
