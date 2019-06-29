import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecfrmComponent } from './recfrm/recfrm.component';
import { CustSrvService } from './cust-srv.service';
import { Emp }  from './emp';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImgDetlComponent } from './img-detl/img-detl.component';
import { ImgsrvService } from './img-detl/imgsrv.service';
import { ImgpipPipe } from './img-detl/imgpip.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductCartComponent } from './products/product-cart/product-cart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductFavComponent } from './products/product-fav/product-fav.component';
import { LoginComponent } from './login/login.component';

const appRoot:  Routes=[
		//each route is an js obj.
		
		{ path: '', redirectTo: '/', pathMatch: 'full' },  
		{ path: 'login', component:LoginComponent },  
		{ path: 'insert', component:RecfrmComponent },  
		{ path: 'update/:id', component:UpdateComponent },  
		{ path: 'update', component:UpdateComponent },  
		{ path: 'display', component:DeleteComponent },  
		{ path: 'gallery', component:GalleryComponent },  
		{ path: 'imgs/:id', component:ImgDetlComponent },
		{ path: 'product', component:ProductsComponent, 
				children:[ 
							{ path: '', component:ProductListComponent},
							{ path: 'product-list', component:ProductListComponent},
							{ path: 'product-add', component:ProductAddComponent },
							{ path: 'product-cart', component:ProductCartComponent },
		{ path: 'product-detail/:id', component:ProductDetailsComponent },
		{ path: 'product-fav', component:ProductFavComponent },
		
		]}
		];
		

@NgModule({
  imports: [
    RouterModule.forRoot(appRoot)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
