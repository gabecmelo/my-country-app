import { CountryApiType } from '@/app/types'
import Link from 'next/link'
import React from 'react'

function CountryItem(country: CountryApiType) {
  return (
    <Link href={`/countries/${country.countryCode.toLowerCase()}`} className='flex items-center p-2 bg-gray-600 m-2 text-white hover:text-blue-300 duration-300'>
      <div className='text-sm pt-2 pr-'>{country.countryCode}</div>
      <div className='text-xl'>{country.name}</div>
    </Link>
  )
}

export default CountryItem