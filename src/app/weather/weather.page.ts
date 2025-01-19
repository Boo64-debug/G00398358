import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem } from '@ionic/angular/standalone';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  standalone: true,
  imports: [IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonList, IonItem],})
export class WeatherPage implements OnInit {
  capital: string = ''; // Capital name
  weatherDescription: string = ''; // Weather description
  temperature: number | null = null; // Temperature in Celsius
  apiKey: string = 'your_openweather_api_key'; // Replace with your API key

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const lat = params['lat'];
      const lon = params['lon'];
      this.capital = params['capital'] || 'Unknown Location';

      if (lat && lon) {
        await this.fetchWeather(lat, lon);
      }
    });
  }

  async fetchWeather(lat: string, lon: string) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`
      );
      this.weatherDescription = response.data.weather[0].description;
      this.temperature = response.data.main.temp;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}