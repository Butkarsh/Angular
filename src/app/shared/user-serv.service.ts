import { Injectable } from '@angular/core';
//import * as moment from "moment";
import { User } from "./models/user";

@Injectable()
export class UserServService {

 selectedUser: User = new User();
 
  //users: AngularFireList<User>;
  users:any;
  
  /* location = {
    lat: null,
    lon: null
  }; */

  constructor() { 
   this.getUsers();
  }
  
  getUsers() {
    //this.users = this.db.list("clients");
    return this.users;
  }
  
  createUser(data: User) {
  //  data.location = this.location;
  //  data.createdOn = moment(new Date()).format("X");
    this.users.push(data);
  }
  
  updateUser(user: User) {
  //  this.users.update(user.$key, user);
  }

/*   setLocation(lat, lon) {
    this.location.lat = lat;
    this.location.lon = lon;
  } */
  
}
