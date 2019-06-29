import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../shared/product.service';
import { Product } from "../../shared/models/products";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


 prodForm: FormGroup; // <--- recForm is of type FormGroup
 product:any;
 products=[];
 imgs=[	
			"assets/mobiles/apple.jpg",
			"assets/mobiles/micro.jpg",
			"assets/mobiles/moto.jpg",
			"assets/mobiles/nokia.jpg",
			"assets/mobiles/redmi.jpg",
			"assets/mobiles/samsung.jpg",
			"assets/mobiles/smart.jpg"
	];
 //productImageUrl="assets/mobiles/"+;
 
 constructor(private fb: FormBuilder, private prodServ:ProductService) { // <--- inject FormBuilder
    this.revFormM();
	
  }

  revFormM() {
    this.prodForm = this.fb.group({
      productName:['', Validators.required],
	  productCategory:['', Validators.required], // <--- the FormControl called "name"
	  productDescription:['', Validators.required],
	  productPrice:['', Validators.required],
	  productQuatity:['', Validators.required],
	  productSeller:['', Validators.required],
	  productImageUrl:['', Validators.required]
    });
  }	

  addProducts() {
    if (this.prodForm.valid) {
      this.product=this.prodForm.value;
	  console.log(this.products);
	  
		this.prodServ.AddProduct(this.product)
		.subscribe(res=>{this.products.push(res);});
		alert("record inserted");
		
	  /* this.custSrv.addHero( this.data )
		.subscribe(res => {this.emps.push(res);}),
				alert("record inserted");
		
	}; */   
		}	
	}
	
	ngOnInit(){};
	
}