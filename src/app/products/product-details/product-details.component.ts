import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from './../../shared/product.service';
import { Product } from './../../shared/models/products';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	
  prod:any;
  constructor(private prodSrv:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
	  //this.img= this.imgsrv.getImgs1( this.route.snapshot.params['id'])
	  //this.prod= this.prodSrv.getProductById(this.route.snapshot.params['id']);
	 this.prod=this.prodSrv.getProductById(this.route.snapshot.params['id']).subscribe(data => {this.prod = data;});
  }

   addToCart( data: Product) {
	this.prodSrv.addToCart(data);
	
  } 
 
	
}
