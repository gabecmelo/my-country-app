"use client";
import { useCountries } from "@/app/contexts/CountriesContext";
import { CountryInfoType } from "@/app/types";
import CountryItem from "@/components/CountryItem";
import Loading from "@/components/Loading";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Page() {
  const { loading, setLoading } = useCountries();
  const [country, setCountry] = useState<CountryInfoType>();
  const { countryCode } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/countries/${countryCode}`);
        const text = await response.text();
        console.log(text);
        const data = JSON.parse(text);
        setCountry(data);
        setLoading(false);
      } catch (error) {
        console.error("Error on data request:", error);
        setLoading(false);
      }
    };
    if (countryCode) fetchData();
  }, [countryCode]);

  if (loading) return <Loading />;

  if (!country) return <>Countries Data is not available</>;

  return (
    <div className="bg-zinc-300 p-3 flex flex-col text-center w-1/2 max-sm:w-full">
      <h1 className="text-3xl m-2">{country.name}</h1>
      <div className='flex items-center justify-center w-full'>
      <Image width={450} height={450} src={country.flagUrl} alt={`${country.name} flag`} />
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h2 className="text-2xl mb-4">Population Over Time:</h2>
        <ResponsiveContainer width="90%" height={400}>
          <LineChart
            data={country.historicalPopulationCounts}
            margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", offset: -7, stroke: "#6895d4" }} />
            <YAxis label={{ value: "Population", angle: -90, position: "insideLeft", offset: -43, stroke: "#6895d4" }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-2xl mt-4">Countries Bordering:</h2>
        {country.borders.map((borderingCountry) => (
          <CountryItem
            key={`${borderingCountry.countryCode} - ${borderingCountry.commonName}`}
            countryCode={borderingCountry.countryCode}
            name={borderingCountry.commonName}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
