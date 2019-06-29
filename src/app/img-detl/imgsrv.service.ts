import { Injectable } from '@angular/core';

@Injectable()
export class ImgsrvService {

  vImgs=[   
{"id":1,"category":"one","caption":"This comes under products category and we can define this details letter","url":"assets/imgs/1.jpg"},
{"id":2,"category":"one","caption":"view from a one","url":"assets/imgs/2.jpg"},
{"id":3,"category":"two","caption":"view from a one","url":"assets/imgs/3.jpg"},
{"id":4,"category":"two","caption":"view from a one","url":"assets/imgs/4.jpg"},
{"id":5,"category":"two","caption":"view from a one","url":"assets/imgs/5.jpg"},
{"id":6,"category":"three","caption":"view from a one","url":"assets/imgs/6.jpg"},
{"id":7,"category":"three","caption":"view from a one","url":"assets/imgs/7.jpg"},
{"id":8,"category":"three","caption":"view from a one","url":"assets/imgs/8.jpg"},
{"id":9,"category":"four","caption":"view from a one","url":"assets/imgs/3.jpg"},
{"id":10,"category":"four","caption":"view from a one","url":"assets/imgs/4.jpg"},
];
 
  getImgs(){
	  return this.vImgs.slice(0);
  } 
  
  getImgs1( id:number){
		return  this.vImgs.slice(0).find(image => image.id == id);

  }
  constructor() { }

}

const ImgArr=[]