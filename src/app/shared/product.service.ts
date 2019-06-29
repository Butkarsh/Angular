import { Injectable } from '@angular/core';
import { Product } from "../shared/models/products";
import { AuthService  } from "./auth.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
	
@Injectable()
export class ProductService {
	totalValue: number;

	  products;
    CartCount = 0;
	  FavProdCount = 0;
	  ProductArr=[];
	  favProductArr=[];
	  
	url="http://localhost:3000/products";	  
  constructor(private authService:AuthService,private cstsrvhttp:HttpClient) { }
  
  
  getProducts():Observable<Product[]> {
    this.products= this.cstsrvhttp.get<Product[]>("http://localhost:3000/products");
	return this.products;
	}
  
  AddProduct(products: Product): Observable<Product> {
	 this.products=this.cstsrvhttp.post<Product>("http://localhost:3000/products", products);
	 //alert(this.products.length);
	 return this.products;
	}  
		
  
  
  getFavProducts(){
	  return this.favProductArr.slice(0);
  }
     
  /* for static code
  getProductById(Id: number) {
    //this.product = this.db.object("products/" + key);
    //return this.product;
	return  this.products.slice(0).find( product => product.productId == Id);
  } */
  getProductById(id: number):Observable<Product> {
   // alert(id.value);
	//return this.cstsrvhttp.get<Prod[]>(`${this.url}/${id}`);
	return this.cstsrvhttp.get<Product>(`${this.url}/${id}`);
  }
  
  
   getUsersFavouriteProduct() {
    //const user = this.authService.getLoggedInUser();
    //this.favProductArr = this.db.list("favouriteProducts", ref =>
     // ref.orderByChild("userId").equalTo(user.$key));
	 // for( i = 0; this.products.length>0; i++){
		
	// 	if(user.UserId === products[i].UserId){
	// 		return LiufavProductArr=products[i];
	// 	}
	//   }
  //   return this.LiufavProductArr;
	// }
	 }
  
/*   getLocalFavouriteProducts() {
    const product =
      JSON.parse(localStorage.getItem("avf_item")) || [];

    return product;
  }
  
  getLocalCartProducts() {
    const ProductArr =
      JSON.parse(localStorage.getItem("avct_item")) || [];

    return ProductArr;
  } */
  
/*   calculateLocalFavProdCounts(){
	   this.FavProdCount = this.getLocalFavouriteProducts().length;
  }
 */  
	calculateLocalCartProdCounts( pl ){
		this.CartCount = pl;
		//alert(this.CartCount);
	}	
	
	calculateLocalFavProdCounts(fpl){
		this.FavProdCount=fpl
	}
  
  addToCart(obj: Product):void {
		  
	   let p =this.ProductArr;
	   //p = JSON.parse(localStorage.getItem("avct_item")) || [];
       p.push(obj);
	   localStorage.setItem('ctrItem', JSON.stringify(p.length));
	   let crtItemCnt=JSON.parse(localStorage.getItem('ctrItem'));
	   //alert(crtItemCnt);
	   this.calculateLocalCartProdCounts(crtItemCnt);
	   this.calculateTotal();
	}
	
	
/*	addToFavourite(products: Product): Observable<Product> {

 		if(this.authService.currentUser!= null)
			{
				let liu=this.authService.currentUser.UserId
				alert(liu);
				let FpObj={'product':products,'UserId':liu};
				alert(FpObj);
				this.favProductArr=this.cstsrvhttp.post<Product>("http://localhost:3000/favProd", FpObj);
				alert("in service"+ this.favProductArr[0]);
				return this.favProductArr;
			} 
		this.favProductArr.push(products);
		localStorage.setItem('ctrFavItem', JSON.stringify(this.favProductArr.length));
	    let crtItemCnt=JSON.parse(localStorage.getItem('ctrFavItem'));
		alert(this.favProductArr.length);
		this.calculateLocalFavProdCounts(this.favProductArr.length);
		//return this.favProductArr;	
	}  */
	/* 
	addToFavourite( obj :Product) {
		
		let favArr=this.favProductArr;
		favArr.push(obj);
		localStorage.setItem('ctrFavItem', JSON.stringify(favArr.length));
	    let crtItemCnt=JSON.parse(localStorage.getItem('ctrFavItem'));
		//alert(favArr.length);
		this.calculateLocalFavProdCounts(favArr.length);
	
	}  */
	
	addToFavourite(obj : Product) {
		alert(obj.productName);
		this.favProductArr.push(obj);
		localStorage.setItem('ctrFavItem', JSON.stringify(this.favProductArr.length));
	    let crtItemCnt=JSON.parse(localStorage.getItem('ctrFavItem'));
		alert(this.favProductArr.length);
		this.calculateLocalFavProdCounts(this.favProductArr.length);
		return this.favProductArr;
	}
	
	
	
	removeFromProd(obj:Product){
	  for(let i=0;i<this.ProductArr.length;i++)
	  {
		if(this.ProductArr[i].productId===obj.productId)
			{
				this.calculateTotalrmv(this.ProductArr[i].productPrice);
				this.calculateLocalCartProdCounts(this.ProductArr.length-1);
				return this.ProductArr.splice(i,1);
			}
	  }
	}
		
	removeFromFav(obj:Product){
	 alert(this.favProductArr.length);
	 for(let i=0;i<this.favProductArr.length;i++)
	  {
		if(this.favProductArr[i].productId===obj.productId)
			{					
				this.calculateLocalFavProdCounts(this.favProductArr.length-1);
				alert(this.favProductArr.length);
				let p=this.favProductArr.splice(i,1);
				alert("array length="+ p.length);
				return p ;
			}			
	  }
	}
		
	calculateTotal(){
			//const ProductArr: Product[] = dataChanges.currentValue;
	    this.totalValue = 0;
		this.ProductArr.forEach(product => {
			this.totalValue=(this.totalValue) + parseInt(product.productPrice)		
		}) 
	}
	
	calculateTotalrmv( prdPrice: number){
	   	this.totalValue=this.totalValue-(prdPrice);
	}
	
}
