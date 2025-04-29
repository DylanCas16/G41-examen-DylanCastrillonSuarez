import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "examen-angular-b2e02", appId: "1:902448459590:web:379d633a7c3579b25e7f47", storageBucket: "examen-angular-b2e02.firebasestorage.app", apiKey: "AIzaSyDca4b7gpXI6x_Fh6VZWcEhK4sE89kcMsI", authDomain: "examen-angular-b2e02.firebaseapp.com", messagingSenderId: "902448459590" })), provideFirestore(() => getFirestore())]
};
