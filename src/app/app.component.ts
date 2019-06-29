import { Component } from '@angular/core';
import { Emp } from './emp';
import { Observable } from 'rxjs';
//import { Observable } from "rxjs/Observable";
import { CustSrvService } from './cust-srv.service';
import { ProductService } from './shared/product.service';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular 5/6/7 E-commerse application';
  emps:Emp[] = [];
 
	
	constructor( private custSrv:CustSrvService, 
				 private prodsrv:ProductService,
				 private authServ:AuthService) { // <--- inject FormBuilder
		
		//this.custSrv.getData().subscribe(data => {this.emps = data;});	
	
  }
	
 }
