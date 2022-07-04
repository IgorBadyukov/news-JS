import { Loader } from './loader';

export class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '0112dddd01964940819e48adb1c8a721', // получите свой ключ https://newsapi.org/
    });
  }
}
