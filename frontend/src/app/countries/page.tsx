"use client";

require('dotenv').config();
import { useEffect, useState } from "react";
import CountryItem from "@/components/CountryItem";
import Loading from "@/components/Loading";
import { useCountries } from "@/app/contexts/CountriesContext";

function Page() {
  const { loading, setLoading, countries, setCountries } = useCountries();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const BACKEND_PORT = process.env.PUBLIC_BACKEND_PORT || 3000;
        const response = await fetch(`http://localhost:${BACKEND_PORT}/countries`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading, setCountries]);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col w-full bg-zinc-300 text-center p-5 max-sm:w-full">
      <h1 className="text-3xl">Countries</h1>
      {countries.map((country) => (
        <CountryItem
          countryCode={country.countryCode}
          name={country.name}
          key={`${country.countryCode} - ${country.name}`}
        />
      ))}
    </div>
  );
}

export default Page;
