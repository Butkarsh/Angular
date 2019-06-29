import { Component, OnInit } from '@angular/core';
import { ImgsrvService } from './imgsrv.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-img-detl',
  templateUrl: './img-detl.component.html',
  styleUrls: ['./img-detl.component.css']
})
export class ImgDetlComponent implements OnInit {
		
   img:any;  
  
  constructor(private imgsrv:ImgsrvService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
	  this.img= this.imgsrv.getImgs1( this.route.snapshot.params['id'])
  }
  
  btnClick= function () {
        this.router.navigateByUrl('/gallery');
};

}
