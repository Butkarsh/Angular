import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';// formControl class(1st)
//import { FormControl ,FormGroup  } from '@angular/forms';// formGroup class
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Emp } from '../emp';
import { Observable } from 'rxjs';
//import { Observable } from "rxjs/Observable";
import { CustSrvService } from '../cust-srv.service';

@Component({
  selector: 'app-recfrm',
  templateUrl: './recfrm.component.html',
  styleUrls: ['./recfrm.component.css']
})
export class RecfrmComponent  {

  //form control class 	
  //frmname = new FormControl();
  
  /*  revForm = new FormGroup ({
	   
    fname: new FormControl(),
    lname: new FormControl(),
    add: new FormControl()
	
  }); */

 revForm: FormGroup; // <--- recForm is of type FormGroup
 data:any=[];
 emps:Emp[]=[];
 constructor(private fb: FormBuilder, private custSrv:CustSrvService) { // <--- inject FormBuilder
    this.revFormM();
	
  }

  revFormM() {
    this.revForm = this.fb.group({
      firstName:['', Validators.required], // <--- the FormControl called "name"
	  lastName:['', Validators.required],
	  city:['', Validators.required],
	  telephone:['', Validators.required],
	  address:['']
    });
  }	

   regUser() {
    if (this.revForm.valid) {
      this.data=this.revForm.value;
	  //console.log(this.data);
	  this.custSrv.addHero( this.data )
		.subscribe(res => {this.emps.push(res);}),
				alert("record inserted");
		
	};   
    } 
   }
	/* add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    }); */

	
  
