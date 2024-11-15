import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { welcomeMessage: 'Welcome to My Country Info App!' };
  }
}
