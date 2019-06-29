import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../shared/product.service';
import { Product } from './../../shared/models/products';

@Component({
  selector: 'app-product-fav',
  templateUrl: './product-fav.component.html',
  styleUrls: ['./product-fav.component.css']
})
export class ProductFavComponent implements OnInit {

   favProdArr=[];
     
  constructor(private prodSrv:ProductService) { }

  ngOnInit() {
	  this.favProdArr= this.prodSrv.favProductArr;
	  //alert(this.favProdArr.productImageUrl);
	  //alert(this.favProdArr.productName);
  }
  
  
  removeFromFav(data:Product){
	  this.prodSrv.removeFromFav(data);
	  alert(this.favProdArr.length);
  }
  
  /* removeProduct(data:Product){
	  
	  this.prodSrv.removeFromProd(data);
  } */

}
