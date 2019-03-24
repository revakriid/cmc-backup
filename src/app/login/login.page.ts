import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username: string = ""
	password: string = ""

	constructor(
		public afAuth: AngularFireAuth,
		public router: Router,
		public user: UserService
		) { }

	ngOnInit() {
	}

	toRegister(){
		console.log("CLicked Register Button");
		this.router.navigate(["register"]);
	}

	async doLogin(){
		const{ username, password } = this
		try{
			const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
			if(res.user){
				this.user.setUser({
					username,
					uid: res.user.uid
				})
			}

			this.router.navigate(['tabs'])

		}catch(err){
			console.dir(err)
			if(err.code === "auth/user-not-found"){
				console.log("User not found")
			}
		}		
	}



	// toRegister(){
	// 	console.log("Clicked register button")
	// 	this.router.navigate(["register"])
	// }

	doLoginGoogle(){
		console.log("Clicked button Google")
		//this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
	}

}
