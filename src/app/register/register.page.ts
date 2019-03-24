import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	username: string = ""
	password: string = ""
	cPassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    /*public afStore: AngularFirestore,   //variable afStore gives access to angular fire store
    public user: UserService*/
    ) { }

  ngOnInit() {
  }

  async doRegister(){
  	const {username, password, cPassword } = this

  	if (password !== cPassword) {
      this.showAlert("Error!","Password doesn't match")
  		return console.error("Passwords dont match")
  	}

    if ( username === "" || password === "" || cPassword === ""){
      this.showAlert("Error!", "Missing data! Please fill up all the forms")
    }

  	try{
	  	const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + "@gmail.com" , password)
      

      this.showAlert("Success!","Welcome Aboard!")
      this.router.navigate(['tabs'])
  	}catch(err){
      //this.showAlert("Error!", err.message)
  		//console.dir(err)
  	}
  }

  async showAlert(header:string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()

  }

  toLogin(){
    this.router.navigate(['login'])
  }

}
