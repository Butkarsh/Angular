import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Emp } from '../emp';
import { Observable } from 'rxjs';
//import { Observable } from "rxjs/Observable";
import { CustSrvService } from '../cust-srv.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from "@angular/router";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
 //id:number=1;
 revForm: FormGroup; // <--- recForm is of type FormGroup
 data:any=[];
 emps:Emp[]=[];
  
  
 
 constructor(	private fb: FormBuilder, 
				private custSrv:CustSrvService,
     			private route: ActivatedRoute,
			    private router: Router,
			    private location: Location
			) 
	{ // <--- inject FormBuilder
		this.revFormM();
	}

  revFormM() {
    this.revForm = this.fb.group({
      id:['',Validators.required], // <--- the FormControl called "name"
      firstName:['', Validators.required], // <--- the FormControl called "name"
	  lastName:['', Validators.required],
	  city:['', Validators.required],
	  telephone:['', Validators.required],
	  address:['']
    });
	
	
  }	

	updateUser() {
    if (this.revForm.valid) {
      this.data=this.revForm.value;
	  //console.log(this.data);
	  console.log(this.data.id);
	  
	  this.custSrv.updateHero( this.data )
		.subscribe( res => { /* this.data.push(res); */
								this.router.navigate(['display']);
							}),
				console.log("record Updated");
		
	};   
    }
	
	/* getUser(uid:number){
		   this.custSrv.getDataByid(uid).subscribe(data => {this.emps = data;},
					err => {
					  /// here the function that you want you can check the status of the 
					  ///error
					  if(err.status == 404) {
						console.log("record not found"); 
					  } 
				  }) 
   	} */
  
   
 
   ngOnInit() {
	   
	   
		const id = +this.route.snapshot.paramMap.get('id');
		console.log(id);
		this.custSrv.getDataByid(id).subscribe(data => {this.emps = data;},
					err => {
					  /// here the function that you want you can check the status of the 
					  ///error
					  if(err.status == 404) {
						alert("no record found"); 
					  } 
				  }) 
   
  }

}
