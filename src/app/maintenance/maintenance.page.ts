import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  constructor(
  	public afAuth: AngularFireAuth,
  	public router: Router,
    public alert: AlertController
  	) { }

  ngOnInit() {
  }

  doLogout(){
  	this.afAuth.auth.signOut()
    this.showAlert("Success!","You are now logged out!")
  	this.router.navigate(['login']);
  }

  async showAlert(header:string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()

  }
}
