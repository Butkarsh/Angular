import { Component, OnInit } from '@angular/core';
import { UserServService } from '../shared/user-serv.service';
import { User } from '../shared/models/user';
//import { NgForm, EmailValidator } from "@angular/forms";
//import { UserService } from "../../shared/services/user.service";
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { AuthService } from "../shared/auth.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   //providers: [EmailValidator]
})
export class LoginComponent implements OnInit {

    user = { emailId: "",loginPassword: ""};

  errorInUserCreate = false;
  errorMessage: any;
  createUser;
  currentUser;

 loginForm: FormGroup; // <--- recForm is of type FormGroup
 data:any=[];
 users:User[]=[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route:ActivatedRoute,private router:Router)
	{
	   this.createUser = new User();
	   this.revFormM();
	}

  ngOnInit() { }
  
  revFormM() {
    this.loginForm = this.fb.group({
      UserId:['', Validators.required], // <--- the FormControl called "name"
	  loginPassword:['', Validators.required]
    });
  }	

  loginUser(){
	  
/* 	  if (this.loginForm.valid) {
      
	  this.user=this.loginForm.value;
	  
	  this.currentUser=this.authService.getLoggedInUser( this.user )
	  
	  if(this.currentUser==null){
		
		this.router.navigate(["/"]);
	  }
	  else{
	  	  this.router.navigate(["/product"]);
	  }
 */		/* .subscribe(res => 
		{ this.currentUser=res;
			this.router.navigate(["/product"]);
		}),
		console.log("Error while Creating User");
		 */
	}
  }
  
  /* 
   addUser(userForm: NgForm) {
    //userForm.value["isAdmin"] = false;
	obj={
		   'emailId':userForm.value["emailId"],
		   'loginPassword':userForm.value["loginPassword"]
		}
    this.authService
      .createUserWithEmailAndPassword( obj )
      .then(res => {
          setTimeout((router: Router) => {
          this.router.navigate(["/"]);
        }, 1500);
      })
      .catch(err => {
        this.errorInUserCreate = true;
        this.errorMessage = err;
      });
	}

  signInWithEmail(userForm: NgForm) {
    this.authService
      .signInRegular(userForm.value["emailId"], userForm.value["loginPassword"])
      .then(res => {
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");

        setTimeout((router: Router) => {
          this.router.navigate([returnUrl || "/"]);
        }, 1500);

        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.log("logging Error: ", err);
      });
	}	
 */


