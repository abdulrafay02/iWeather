import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  country: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
      this.storage.get('location').then((val) => {
        if(val != null) {
          let location = JSON.parse(val);
          this.city = location.city;
          this.country = localStorage.country;
        } else {
          this.city = 'Karachi';
          this.country = 'PK';
        }
      });
  }

  saveForm() {
    let location = {
      city: this.city,
      country: this.country
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
