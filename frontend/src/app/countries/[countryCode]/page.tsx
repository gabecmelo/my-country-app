"use client";
import { useCountries } from "@/app/contexts/CountriesContext";
import { CountryInfoType } from "@/app/types";
import CountryItem from "@/components/CountryItem";
import Loading from "@/components/Loading";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        //const data = await response.json();
        setCountry(data);
        setLoading(false);    
        
      } catch (error) {
        console.error("Error on data request:", error);
        setLoading(false);
      }      
    };
    if (countryCode) fetchData();    
  }, []);  

  if (loading) return <Loading />;

  if (!country) return <>Countries Data is not available</>;

  return (
    <div className="bg-zinc-300 p-3 flex flex-col text-center">
      <h1 className="text-3xl m-2">{country.name}</h1>
      <Image width={450} height={450} src={country.flagUrl} alt={`${country.name} flag`} />
      <>
        <h2 className="text-2xl mt-4"> Countries bordering: </h2>
        {country.borders.map((country) => (
          <CountryItem
            key={`${country.countryCode} - ${country.commonName}`}
            countryCode={country.countryCode}
            name={country.commonName}
          />
        ))}
      </>
    </div>
  );
}

export default Page;
