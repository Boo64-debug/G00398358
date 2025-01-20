import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { IonIcon, IonButton  ,IonContent,IonHeader,IonTitle,IonToolbar,} from '@ionic/angular/standalone';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  imports: [  IonIcon,IonButton,IonContent,IonHeader,IonTitle,IonToolbar,CommonModule,FormsModule]
})
export class WeatherPage implements OnInit {

  capital: string = '';
  weatherData: any = null;
  selectedUnit: string = 'metric'; // Default unit
  apiKey: string = '0e613784e087bdc2a94f214d6cde889c';

  constructor(private route: ActivatedRoute , private router: Router ){}

  ngOnInit() {
    // Retrieve the unit from localStorage or default to 'metric'
    const savedUnit = localStorage.getItem('selectedUnit');
    this.selectedUnit = savedUnit ? savedUnit : 'metric';

    // Retrieve query parameters
    this.route.queryParams.subscribe(async (params) => {
      const lat = params['lat'];
      const lon = params['lon'];
      this.capital = params['capital'];

      if (lat && lon) {
        await this.fetchWeather(lat, lon);
      }
    });
  }
 settings() {
  this.router.navigate(['/settings']);
}
  async fetchWeather(lat: string, lon: string) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${this.selectedUnit}&appid=${this.apiKey}`
      );
      this.weatherData = response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}