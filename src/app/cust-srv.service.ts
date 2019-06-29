import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { HttpClient/* HttpHeaders */} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Emp } from './emp';

@Injectable()
export class CustSrvService {
	
	//Emp:Observable;
	url:String="http://localhost:3000/employees";
	
	constructor(private cstsrvhttp:HttpClient ) { }
  
  getData():Observable<Emp[]>{
    return this.cstsrvhttp.get<Emp[]>("http://localhost:3000/employees");
  }
  
  getDataByid( id: number ):Observable<Emp[]>{
	//console.log(id);
	  //return this.cstsrvhttp.get<Emp[]>(`${this.url}/${id}`);
	  return this.cstsrvhttp.get<Emp[]>(`${this.url}/${id}`);
	  //return this.cstsrvhttp.get<Emp[]>(`${this.url}`);
	}

	updateHero(emps: Emp): Observable<Emp> {
		//console.log(emps.id);
		return this.cstsrvhttp.put<Emp>(`${this.url}/${emps.id}`, emps);
	}
	
  /** POST: add a new hero to the server *
	addHero (hero: Hero): Observable<Hero> {
	return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}*/
	
	/** PUT: update the hero on the server 
		updateHero (hero: Hero): Observable<any> {
		  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
			tap(_ => this.log(`updated hero id=${hero.id}`)),
			catchError(this.handleError<any>('updateHero'))
		  );
		}*/
	
	
	addHero (emps: Emp): Observable<Emp> {
		return this.cstsrvhttp.post<Emp>("http://localhost:3000/employees", emps);
	}
	
	/** DELETE: delete the hero from the server 
	deleteHero (hero: Hero | number): Observable<Hero> {
	  const id = typeof hero === 'number' ? hero : hero.id;
	  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );*/
  
  deleteHero (emps: Emp | number): Observable<Emp> {
	  const id = typeof emps === 'number' ? emps : emps.id;
	  const url = `${this.url}/${id}`;

  return this.cstsrvhttp.delete<Emp>(url);
  
}
	
}