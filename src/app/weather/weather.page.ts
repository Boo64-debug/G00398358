import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

import axios from 'axios';
import { IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem } from '@ionic/angular/standalone';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
imports: [IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem],

})
export class WeatherPage implements OnInit {
  capital: string = ''; // Capital city name
  weatherData: any = null; // Weather data
  apiKey = '0e613784e087bdc2a94f214d6cde889c'; // Your OpenWeatherMap API key

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const lat = params['lat'];
      const lon = params['lon'];
      this.capital = params['capital'];

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
      this.weatherData = response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}


