import { Component, OnInit ,Input,OnChanges  } from '@angular/core';
import { ImgsrvService } from '../img-detl/imgsrv.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

   
   dispImg=[];
    
	@Input() filterBy?:string ='all';
	
  constructor(private imgsrv:ImgsrvService ) { 
	this.dispImg = this.imgsrv.getImgs();
  }

  ngOnChanges() {
	  this.dispImg= this.imgsrv.getImgs();
  }

}
