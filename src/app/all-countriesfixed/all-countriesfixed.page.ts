import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

import axios from 'axios';
import { IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-all-countriesfixed',
  templateUrl: './all-countriesfixed.page.html',
  styleUrls: ['./all-countriesfixed.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem],
})
export class allCountriesfixedPage implements OnInit {

  keyword: string = ''; // Search keyword
  countries: any[] = []; // Full list of countries
  filteredCountries: any[] = []; // Filtered countries based on the search

  constructor(private route: ActivatedRoute,  private router: Router)  {}

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
 // Navigate to News Page
 opennews() {
  this.router.navigate(['/news']);
}

// Navigate to Weather Page
openweather() {
  this.router.navigate(['/weather']);
}
  // Filter countries based on the search keyword
  filterCountries() {
    if (this.keyword.trim() === '') {
      this.filteredCountries = this.countries; // Show all countries if no search
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.common.toLowerCase().includes(this.keyword.toLowerCase())
      );
    }
  }
}