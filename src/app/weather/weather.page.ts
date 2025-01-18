import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  standalone: true,
  imports: [IonButton, IonLabel, IonList , IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink], 
})
export class WeatherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
