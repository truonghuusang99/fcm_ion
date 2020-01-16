import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';

const firebase = {
 // your firebase web config
  apiKey: "AIzaSyCnM29g1p-mIqrTdM3LsCFET41cfedPh_c",
  authDomain: "testfcm-294c9.firebaseapp.com",
  databaseURL: "https://testfcm-294c9.firebaseio.com",
  projectId: "testfcm-294c9",
  storageBucket: "testfcm-294c9.appspot.com",
  messagingSenderId: "977760464986",
  appId: "1:977760464986:web:7056f1fcfb160612c8a863"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FcmProvider
  ]
})
export class AppModule {}
