import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../shared/product.service';
import { Product } from './../../shared/models/products';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  cartList=[];
  
  constructor(private prodSrv:ProductService) { }

  ngOnInit() {
	this.cartList=this.prodSrv.ProductArr;	
	
  }
  
  removeProduct(data:Product){
	  
	  this.prodSrv.removeFromProd(data);
	 // alert(this.cartList.length);
  }
  

}
