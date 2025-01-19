import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent,IonHeader,IonTitle,IonToolbar, IonCard,IonCardContent,IonCardHeader,IonCardSubtitle, IonCardTitle, IonList,IonButton,IonText} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonContent,IonHeader,IonTitle,IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonList,IonButton,IonText
  ],
})
export class NewsPage implements OnInit {
  countryCode: string = ''; // Country CCA2 code
  countryName: string = ''; // Country name
  newsList: any[] = []; // List of news stories
  noNewsAvailable: boolean = false; // Flag for no news condition

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const countryParam = params['country'];
      const countryNameParam = params['name'];

      this.countryCode = countryParam || ''; // Extract the CCA2 code
      this.countryName = countryNameParam || ''; // Extract the country name

      if (this.countryCode) {
        await this.fetchNews();
      } else {
        this.noNewsAvailable = true;
      }
    });
  }

  // Fetch news data for the given country CCA2 code
  async fetchNews() {
    try {
      const apiKey = 'pub_65839bb0e97c0cf394ffbdc249357721bcb77'; // Replace with your API key
      const response = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${this.countryCode}`
      );

      // Check if there are any results
      if (response.data.results && response.data.results.length > 0) {
        this.newsList = response.data.results.map((news: any) => ({
          title: news.title || 'No Title Available',
          description: news.description || 'No Description Available',
          image_url:
            news.image_url ||
            'https://www.neutecgroup.com/wp-content/uploads/2024/05/neutec-text-300x300.png', // Placeholder if no image
          link: news.link || '#', // Fallback if no link available
        }));
        this.noNewsAvailable = false;
      } else {
        this.newsList = [];
        this.noNewsAvailable = true;
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      this.newsList = [];
      this.noNewsAvailable = true;
    }
  }
}