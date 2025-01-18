import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import {IonThumbnail, IonLabel,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonButton} from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonLabel,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem]
})
export class MoviesPage implements OnInit {
  keyword: string = ''; // Search keyword
  countries: any[] = []; // Full list of countries
  filteredCountries: any[] = []; // Filtered countries based on the search

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    // Get the keyword from the route's query parameters
    this.route.queryParams.subscribe(async (params) => {
      this.keyword = params['keyword'] || '';
      await this.fetchCountries(); // Fetch countries
      this.filterCountries(); // Filter based on the keyword
    });
  }

  // Fetch countries from the API
  async fetchCountries() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      this.countries = response.data; // Store all countries
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  // Filter countries based on the search keyword
  filterCountries() {
    if (this.keyword.trim() === '') {
      this.filteredCountries = []; // Clear the results if the search is empty
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.common.toLowerCase().includes(this.keyword.toLowerCase())
      );
    }
  }
}