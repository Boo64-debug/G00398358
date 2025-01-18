import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonRadio, IonItem, IonList, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonRadio, IonItem, IonList, IonRadioGroup]
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
