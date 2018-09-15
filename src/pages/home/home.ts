import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'
import { Storage } from '@ionic/Storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city: string,
    country: string
  }

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('location').then((val)=> {
      if(val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Karachi',
          country: 'PK'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.country)
        .subscribe(weather => {
        this.weather = weather;
        console.log(this.weather);
        });

    });

  }

}
