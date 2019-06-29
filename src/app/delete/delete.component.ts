import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Emp } from '../emp';
import { Observable } from 'rxjs';
//import { Observable } from "rxjs/Observable";
import { CustSrvService } from '../cust-srv.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

emps:Emp[]=[];

constructor( private custSrv:CustSrvService) { }
  
	
	deleteUser( b :Emp) {
	 
      this.emps = this.emps.filter(h => h !== b);
	  this.custSrv.deleteHero(b).subscribe( );
	  
	}
	
	
  ngOnInit() {
	
	this.custSrv.getData().subscribe(data => {this.emps = data;console.log(this.emps);});	
	
  }

}
