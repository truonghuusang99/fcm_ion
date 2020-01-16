import { Injectable } from "@angular/core";
import { Firebase } from "@ionic-native/firebase";
import { Platform } from "ionic-angular";
import { AngularFirestore } from "angularfire2/firestore";

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {
  constructor(
    public firebase: Firebase,
    public afs: AngularFirestore,
    private platform: Platform
  ) {
    console.log("Hello FcmProvider Provider");
  }
  async getToken() {

    let token;

    if (this.platform.is('android')) {
      token = await this.firebase.getToken()
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    console.log(token);
    return this.saveTokenToFirestore(token)
  }
  private saveTokenToFirestore(token) {
    if (!token) return;

    const devicesRef = this.afs.collection('devices')

    const docData = {
      token: token,
      userId: 'testUser',
    }

    return devicesRef.doc(token).set(docData)
  }
  listenToNotifications() {
    return this.firebase.onNotificationOpen()
  }
}
