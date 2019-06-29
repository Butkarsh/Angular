import { Component, OnInit,OnChanges } from '@angular/core';
import { Product } from './../../shared/models/products';
import { Observable } from "rxjs";
import { ProductService } from './../../shared/product.service';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
	
	data={};
  dispImg=[];
  product=[];
  FavProd=[];
  brands = ["All","Google","Apple","Samsung","OnePlus","Lenovo","Nokia","Motorolla"];
  
 constructor( private prodSrv:ProductService, private authServ:AuthService  ) { 
	
  this.prodSrv.getProducts()
	.subscribe(data => {this.product = data;console.log(this.product);});
  }
  
  
  ngOnInit(){
				
  }
     
  addToCart( data: Product) {
	this.prodSrv.addToCart(data);
  } 

  addToFavourite( prod: Product) {
	
	//this.prodSrv.addToFavourite(this.data).subscribe(res=>{this.FavProd.push(res);});
	this.prodSrv.addToFavourite(prod);//.subscribe(res=>{this.FavProd.push(res);});
	
  }
  
  removeProduct(data:Product){
	this.prodSrv.removeFromProd(data);
  }	
  

	
}
