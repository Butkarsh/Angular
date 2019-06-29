import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module for FormControl
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecfrmComponent } from './recfrm/recfrm.component';
import { CustSrvService } from './cust-srv.service';
import { Emp }  from './emp';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImgDetlComponent } from './img-detl/img-detl.component';
import { ImgsrvService } from './img-detl/imgsrv.service';
import { ImgpipPipe } from './img-detl/imgpip.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ProductCartComponent } from './products/product-cart/product-cart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductService } from './shared/product.service';
import { UserServService } from './shared/user-serv.service';
import { AuthService } from './shared/auth.service';
import { CartCalcutaterComponent } from './products/cart-calcutater/cart-calcutater.component';
import { ProductFavComponent } from './products/product-fav/product-fav.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    RecfrmComponent,
    UpdateComponent,
    DeleteComponent,
    GalleryComponent,
    ImgDetlComponent,
    ImgpipPipe,
    ProductsComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductCartComponent,
    ProductDetailsComponent,
    CartCalcutaterComponent,
    ProductFavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule, //for FormControl Class
	HttpClientModule,
	AppRoutingModule,
	FormsModule
	 ],
  providers: [CustSrvService,ImgsrvService,ProductService,UserServService,AuthService	],
  bootstrap: [AppComponent]
})
export class AppModule { }
