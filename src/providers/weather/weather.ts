import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherProvider {
  API_KEY = "insert your API key here";
  url;

  constructor(public http: HttpClient) {
    this.url = "https://api.openweathermap.org/data/2.5/weather?q=";
  }

  getWeather(city, country) {
    return this.http.get(
      this.url +
        `${city},${country}&id=524901&APPID=${this.API_KEY}&units=metric`
    );
  }
}
