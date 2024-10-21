import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonCol,
  IonRow,
  IonToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  //templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    ExploreContainerComponent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonCol,
    IonRow,
    IonToggle
  ],
  template:`
  <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> Curriculum Vitae de Dustin Marcatoma </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <main id="barraNavegaciónCV" class="flex sm:flex-row flex-col">
        <aside
          class="flex flex-col gap-10 p-14 w-full sm:w-1/2 md:w-1/3  border-[#121212] bg-orange-300"
        >
          <div>
          <ion-toggle >Modo Oscuro</ion-toggle><br /><br />

            <h3 class="font-extrabold uppercase tracking-widest">Contacto</h3>
            <ul
              class="mt-4 flex flex-col gap-1 text-sm list-disc marker:text-[#706643] ml-4"
            >
              <li><a href="tel:+593979008923">+593 979008923</a></li>
              <li>
                <a href="mailto:dustin04ms@gmail.com"
                  >dustin04ms&#64;gmail.com</a
                >
              </li>
              <li>Quito - Ecuador</li>
              <li>
                <a href="https://www.linkedin.com/in/dustin-marcatoma-8568422ab/" target="_blank"
                  >https://www.linkedin.com/in/dustin-marcatoma-8568422ab/</a
                >
              </li>
            </ul>
          </div>
          <div class="flex flex-col ">
            <img
              src="../assets/img/Yo.jpg"
              class="rounded-full mx-auto mb-10 border-8"
            />
            <h3 class="font-extrabold uppercase tracking-widest">Sobre mí</h3>
            <p class="text-sm mt-4">
              Soy un chico  apasionado por la tecnología y la programación. Me gusta ser bastante reservado y tranquilo,  pero cuando me gusta algo, me dedico a ello con todo mi corazón. Me gusta mucho  la música, jugar videojuegos, el anime japonés, leer mangas, ver series, peliculas y jugar volley.
            </p>
          </div>
          <div>
            <h3 class="font-extrabold uppercase tracking-widest">
              Habilidades
            </h3>
            <ul class="mt-4 list-disc marker:text-[#706643] text-sm ml-4">
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>SQL y NoSQL</li>
              <li>JavaScript</li>
              <li>HTML y CSS</li>
              <li>
                Frameworks (React, Tailwind CSS,
                Express, Ionic)
              </li>
              <li>Metodología SCRUM</li>
            </ul>
          </div>
          <ion-accordion-group>
            <ion-accordion>
              <ion-item color="dark" slot="header">
                <h3 class="font-extrabold uppercase tracking-widest">
                  Idiomas
                </h3>
              </ion-item>
              <div class="ion-padding" slot="content">
                <ul class="list-disc marker:text-[#706643] text-sm ml-4">
                  <li>Español (nativo)</li>
                  <li>Inglés (intermedio)</li>
                  <li>Japonés (basico)</li>
                </ul>
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </aside>

        <section class="w-full bg-white text-black sm:w-1/2 md:w-2/3 py-14">
          <div class="mt-12 px-14">
            <h1
              class="font-bold text-4xl text-[#706643] uppercase tracking-[0.75rem]"
            >
              Dustin
              <br />
              Marcatoma
            </h1>
            <h2 class="font-extrabold mt-4 uppercase tracking-widest">
              Desarrollador Junior
            </h2>
          </div>
          <hr class="border-black my-8" />

          <ion-card class="mx-10 mt-10">
            <ion-card-header>
              <ion-card-title
                ><h2 class="font-extrabold mb-4 uppercase tracking-widest">
                  Formación Académica
                </h2></ion-card-title
              >
            </ion-card-header>

            <ion-card-content>
              <div>
                <strong class="text-[#706643] uppercase md:tracking-widest"
                  >Grado en Tecnología Superior en Desarrollo de
                  Software</strong
                >
                <br />
                <span class="text-sm"
                  >Escuela Politécnica Nacional del Ecuador <br />
                  Noviembre 2021- Presente
                </span>
              </div>
            </ion-card-content>
          </ion-card>

          <div class="px-14 py-8">
            <h2 class="font-extrabold mb-4 uppercase tracking-widest">
              Experiencia
            </h2>
            <strong class="text-[#706643] uppercase tracking-widest"
              >Desarrollador Junior</strong
            >
            <br />
            <small class="font-semibold">
              Sovos - Pasantías <br />
              Junio 2024 - Presente</small
            >
            <ul class="list-disc marker:text-[#706643] ml-8 mt-2">
              <li>
                Gestión de servidores  y bases de datos
              </li>
              <li>
                Migración  de aplicaciones a la nube
              </li>
              <li>Computación en la nube por AWS</li>
            </ul>
          </div>
          <div class="px-14">
            <h2 class="font-extrabold mb-4 uppercase tracking-widest">
              Proyectos Académicos
            </h2>

            @for (project of projects; track $index) {
            <strong class="text-[#706643] uppercase tracking-widest">{{
              project.title
            }}</strong>
            <br />
            <small class="font-semibold">{{ project.description }}</small>
            <ul class="list-disc marker:text-[#706643] ml-8 mt-2 mb-4">
              @for (task of project.tasks; track $index) {
              <li>{{ task }}</li>
              }
            </ul>
            }
            <h2 class="font-extrabold mb-4 uppercase tracking-widest"> Sígueme en mis redes sociales </h2>
            <div class="">
              <ion-grid>
                <ion-row>
                  <ion-col> <a class="flex gap-1" href="https://www.facebook.com/DustinJMS?locale=es_LA"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#4267B2">
                  <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.326v21.348C0 23.402.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.797.143v3.243l-1.918.001c-1.503 0-1.794.714-1.794 1.761v2.309h3.587l-.467 3.622h-3.12V24h6.116C23.402 24 24 23.402 24 22.674V1.326C24 .598 23.402 0 22.675 0z"/>
                  </svg> Facebook </a> </ion-col>
  
                  <ion-col>
              <a class="flex gap-1" href="https://www.tiktok.com/@tuusuario">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000">
                <path d="M12 0h3.047c.066.707.241 1.397.512 2.056.346.834.862 1.59 1.516 2.22.685.652 1.488 1.16 2.368 1.493.569.219 1.173.355 1.785.394V12c-.748 0-1.491-.074-2.217-.22-.788-.155-1.548-.403-2.255-.74-.594-.27-1.157-.617-1.671-1.03v6.689c-.025.989-.24 1.967-.633 2.88-.429.982-1.086 1.866-1.917 2.577-.746.642-1.604 1.126-2.525 1.426-.986.32-2.026.407-3.046.256-.966-.14-1.898-.468-2.726-.958-.927-.564-1.714-1.336-2.309-2.267-.563-.866-.948-1.846-1.131-2.879-.178-.972-.129-1.97.143-2.918.34-1.298 1.105-2.487 2.166-3.316.809-.64 1.77-1.058 2.78-1.215.847-.127 1.72-.07 2.55.164v3.049c-.618-.25-1.29-.357-1.96-.31-.612.044-1.21.237-1.737.565-.615.374-1.113.923-1.436 1.571-.482.92-.527 2.03-.122 2.974.416.956 1.285 1.675 2.288 1.92.996.246 2.094-.033 2.822-.732.665-.6 1.035-1.483 1.034-2.387.002-3.89-.004-7.781.002-11.672z"/>
              </svg>
              TikTok
                </a>
              </ion-col>
  
              <ion-col>
                <a class="flex gap-1" href="https://www.instagram.com/tuusuario">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#E4405F">
                    <path d="M12 0c3.29 0 3.697.012 4.987.07 1.287.058 2.172.276 2.672.465a5.381 5.381 0 011.945 1.26 5.381 5.381 0 011.26 1.945c.189.5.407 1.385.465 2.672.058 1.29.07 1.697.07 4.987s-.012 3.697-.07 4.987c-.058 1.287-.276 2.172-.465 2.672a5.381 5.381 0 01-1.26 1.945 5.381 5.381 0 01-1.945 1.26c-.5.189-1.385.407-2.672.465-1.29.058-1.697.07-4.987.07s-3.697-.012-4.987-.07c-1.287-.058-2.172-.276-2.672-.465a5.381 5.381 0 01-1.945-1.26 5.381 5.381 0 01-1.26-1.945c-.189-.5-.407-1.385-.465-2.672C.012 15.697 0 15.29 0 12s.012-3.697.07-4.987c.058-1.287.276-2.172.465-2.672a5.381 5.381 0 011.26-1.945 5.381 5.381 0 011.945-1.26c.5-.189 1.385-.407 2.672-.465C8.303.012 8.71 0 12 0zm0 2.163c-3.24 0-3.63.012-4.906.07-1.186.054-1.828.246-2.255.41-.568.22-.975.482-1.402.91a3.42 3.42 0 00-.91 1.402c-.164.427-.356 1.069-.41 2.255-.058 1.276-.07 1.666-.07 4.906s.012 3.63.07 4.906c.054 1.186.246 1.828.41 2.255.22.568.482.975.91 1.402.427.428.834.69 1.402.91.427.164 1.069.356 2.255.41 1.276.058 1.666.07 4.906.07s3.63-.012 4.906-.07c1.186-.054 1.828-.246 2.255-.41.568-.22.975-.482 1.402-.91.428-.427.69-.834.91-1.402.164-.427.356-1.069.41-2.255.058-1.276.07-1.666.07-4.906s-.012-3.63-.07-4.906c-.054-1.186-.246-1.828-.41-2.255a3.42 3.42 0 00-.91-1.402 3.42 3.42 0 00-1.402-.91c-.427-.164-1.069-.356-2.255-.41-1.276-.058-1.666-.07-4.906-.07zm0 3.26a6.577 6.577 0 110 13.154 6.577 6.577 0 010-13.154zm0 1.659a4.918 4.918 0 100 9.836 4.918 4.918 0 000-9.836zm6.406-1.035a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z"/>
                  </svg>
                  Instagram
                </a>
            </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </div>
        </section>
      </main>
    </ion-content>
  `
})
export class Tab2Page {

  constructor() {}

  public projects = [
    {
      title: 'Aplicación de Escritorio',
      description: 'Sistema de Historial Médico - Medicare',
      tasks: [
        'Use base de datos SQL para lectura y creación de los datos',
        'Implemente la funcionalidad y la interfaz gráfica con Java',
      ],
    },
    {
        title: 'Aplicación web para una tienda de lentes',
        description: 'Sistema de gestión de inventario y ventas - OpticStore',
        tasks: [
            'Creación del Backend y Frontend  con Node.js y React de un sistema web priorizado en la exposición y venta de productos de una tienda  de lentes',
            'Implementación de la funcionalidad de autenticación y autorización de usuarios con JWT',
        ]
    }
  ];

}
