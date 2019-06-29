import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";
import { ProductService } from './../../shared/product.service';
import { Product } from './../../shared/models/products';

@Component({
  selector: 'app-cart-calcutater',
  templateUrl: './cart-calcutater.component.html',
  styleUrls: ['./cart-calcutater.component.css']
})
export class CartCalcutaterComponent implements OnInit,OnChanges {

  totalvalue=0;	
  //@Input products:Product[];
  products:Product[];
  //products=[];
  
  constructor( private prodSrv:ProductService) { }

  ngOnInit() {
	  	
	  this.products=this.prodSrv.ProductArr;
  }
 
	ngOnChanges(){
	
	this.prodSrv.calculateTotal();
	}
	
/* 	@Input() products: prodArr[];
	
  totalValue = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    
	const dataChanges: SimpleChange = changes.products;

    const products: prodArr[] = dataChanges.currentValue;
    
	this.totalValue = 0;
    
	products.forEach(product => {
      this.totalValue += product.productPrice;
	  alert(this.totalValue);
    });
  }

  ngOnInit() {}
 */
  
}
