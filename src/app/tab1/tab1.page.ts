import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormControl , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  //templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonGrid, IonRow, IonCol, IonInput, IonButton, ReactiveFormsModule],
  template:`
  <ion-header>
    <ion-toolbar>
      <ion-title>Calculadora</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <ion-input [formControl]="display" readonly></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col *ngFor="let key of keys" (click)="inputKey(key)">
          <ion-button expand="full">{{key}}</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
  `
})
export class Tab1Page {
  constructor() {}

    display = new FormControl('');
    keys: string[] = [
      '1', '2', '3', '+',
      '4', '5', '6', '-',
      '7', '8', '9', '*',
      'C', '0', '=', '/'
    ]
  
    inputKey(key: string) {
      if (key === 'C') {
        this.display.setValue('');  
      } else if (key === '=') {
        try {
          const result = this.calculate(this.display.value ?? '');  
          this.display.setValue(result);  
        } catch (e) {
          this.display.setValue('Error');  
        }
      } else {
        this.display.setValue(this.display.value + key); 
      }
    }
  
    calculate(expression: string): string {
      try {
        const result = Function('"use strict";return (' + expression + ')')();  
        return result.toString();  
      } catch (e) {
        return 'Error';  
      }
    }
  
}
