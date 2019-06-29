import { Injectable } from '@angular/core';
//import * as firebase from "firebase/app";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

//import { Observable } from 'rxjs'; --> for angular 6
import { User } from "./models/user";
//import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Injectable()

export class AuthService {

	url:String="http://localhost:3000/employees";
	currentUserName=null;
	//user: Observable<firebase.User>;
	//userDetails: firebase.User = null;
	currentUser:User=null;
	userDetails: User = null;
	user:any;
	
  constructor(private router: Router,private cstsrvhttp:HttpClient) { 
  	
	this.user=this.cstsrvhttp.get<User[]>("http://localhost:3000/user");
	this.user.subscribe(data =>{
    if (data) {
      this.user = data;
    } else {
      this.user;
    }
  });
  }
  
   
  isLoggedIn(){
    if (this.user === null) {
      return false;
    } else {
      return true;
    }
  };
  
  logout(){
    //this.firebaseAuth.auth.signOut().then(res => this.router.navigate(["/"]));
	this.currentUser=null;
	this.currentUserName=null;
	//windows.location.refresh();
  return this.router.navigate(["login"]);
	
  } 
  
  /* 
  createUser(user:User) {
	this.currentUser=user;
	this.currentUserName=this.currentUser.UserId);
    return this.cstsrvhttp.post<User>("http://localhost:3000/user", user);
	}  
	 */
	
	getLoggedInUser(Cuser:User) {
		
		// const loggedUser: User = new User();
		
		// for (let i=0;this.user.length >0;i++){
			
		// 	if(this.user[i].UserId===Cuser.UserId && this.user[i].loginPassword===Cuser.loginPassword){
		// 		this.currentUser=this.user[i];
		// 		this.currentUserName=this.currentUser.UserId;
		// 		return this.currentUser;
		// 	}			 
		}			
	}
	
  /* 
   getLoggedInUser(): User {
    const loggedUser: User = new User();
    //const user = this.firebaseAuth.auth.currentUser;
	const user=this.currentUser;
    if (user) {
      this.userDetails = user;
       if (user != null) {
        //loggedUser.$key = user.uid;
        loggedUser.userName = user.displayName;
        loggedUser.emailId = user.email;
        loggedUser.phoneNumber = user.phoneNumber;
        //loggedUser.avatar = user.photoURL;
        loggedUser.isAdmin = user.email === "admin@gmail.com" ? true : false;
      }
    } else {
      this.userDetails = null;
    } 

    return loggedUser;
  }
  
  isAdmin(): boolean {
    const user = this.getLoggedInUser();
    if (user != null) {
      if (user.isAdmin === true) {
        return true;
      }
    }
  } */
  
/*   signInRegular(SIemail,SIPassword){
	  
	  for (let i=0;this.user.length>0;i++){
		  
		  if(this.user[i].UserId==SIemail && this.user[i].loginPassword==SIPassword){
				return this.user[i];
		  }
	  }
  } */

   /*
   signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }   */
  
  
  

