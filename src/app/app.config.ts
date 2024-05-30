import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideFirebaseApp(() => initializeApp({"projectId":"simulacro2p1labo4","appId":"1:673062270328:web:16906acec963023e5b448d","storageBucket":"simulacro2p1labo4.appspot.com","apiKey":"AIzaSyCKBvKGltYhmH8xSm24cQArEy1f7e0GMNk","authDomain":"simulacro2p1labo4.firebaseapp.com","messagingSenderId":"673062270328"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
