import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonIcon, IonFabButton, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PhotoService } from '../services/photo.service';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';


@Component({
  selector: 'app-tab3',
  //templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonIcon, IonFabButton, IonGrid, IonRow, IonCol, IonImg],
  template: `
  <ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <ion-grid>
    <ion-row>
      <ion-col size="6">
        @for(photo of photoService.photos; track $index){
          <ion-img [src]="photo.webviewPath"></ion-img>
        }
      </ion-col>
    </ion-row>
  </ion-grid>

</ion-content>
  `
})
export class Tab3Page {
  constructor(public photoService: PhotoService) {
    addIcons({camera })
   };

  addPhotoToGallery ( ) {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
