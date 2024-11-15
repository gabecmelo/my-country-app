import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { CountryV3Dto } from 'src/types';

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<CountryV3Dto[]> {
    const countriesUrl = 'https://date.nager.at/api/v3/AvailableCountries';

    const response = await lastValueFrom(this.httpService.get(countriesUrl));

    return response.data;
  }

  async findCountryInfo(countryCode: string): Promise<any> {
    const countryInfoUrl = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
    const populationDataUrl =
      'https://countriesnow.space/api/v0.1/countries/population';
    const flagsURL =
      'https://countriesnow.space/api/v0.1/countries/flag/images';

    try {
      const countryInfoResponse = await lastValueFrom(
        this.httpService.get(countryInfoUrl),
      );

      const [populationDataResponse, flagsResponse] = await Promise.all([
        lastValueFrom(
          this.httpService.post(populationDataUrl, {
            country: countryInfoResponse.data.commonName,
          }),
        ),
        lastValueFrom(
          this.httpService.post(flagsURL, {
            country: countryInfoResponse.data.commonName,
          }),
        ),
      ]);

      return {
        name: countryInfoResponse.data.commonName,
        borders: countryInfoResponse.data.borders,
        historicalPopulationCounts:
          populationDataResponse.data.data.populationCounts,
        flagUrl: flagsResponse.data.data.flag,
      };
    } catch (error) {
      return error.message;
    }
  }
}
