import { Component, OnInit,OnChanges } from '@angular/core';
import { ProductService } from './../shared/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

 //carcount:number=0;
 prodArr:any;
  constructor( private prodsrv:ProductService) { }

  ngOnInit() {
	 // this.carcount=this.prodsrv.CartCount;
	  this.prodArr=this.prodsrv.CartCount;
	  //alert(this.prodArr.length);
		//this.carcount=this.prodArr.length;
  }
  
  ngOnChanges(){
	//    this.carcount=this.prodsrv.CartCount;
    	//this.carcount=this.prodArr.length;
  }
  
}
