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
  selectedUnit: string = 'metric'; // Default to Metric

  ngOnInit() {
    // Load the previously saved unit from localStorage when the page is opened
    const savedUnit = localStorage.getItem('selectedUnit');
    if (savedUnit) {
      this.selectedUnit = savedUnit;
    }
  }

  saveUnit() {
    // Save the selected unit to localStorage
    localStorage.setItem('selectedUnit', this.selectedUnit);
    console.log(`Unit saved: ${this.selectedUnit}`); // Debugging to verify saving
  }
}