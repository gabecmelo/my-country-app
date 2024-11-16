import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller()
export class CountriesController {
  constructor(private countriesService: CountriesService) {}
  @Get('countries')
  findAll() {
    return this.countriesService.findAll();
  }

  @Get('countries/:countryCode')
  findCountryInfo(@Param('countryCode') countryCode: string) {
    return this.countriesService.findCountryInfo(countryCode);
  }
}
