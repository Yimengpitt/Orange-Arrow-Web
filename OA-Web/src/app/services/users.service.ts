import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private db: AngularFireDatabase) { }
  users: Observable <any[]>;
  getUser(userID: string){
    this.users = this.db.list('/UsersInfo/'+ userID).valueChanges();
    this.users.subscribe(val => console.log(val));
    //think about reconstructing the list to only send the information we need to display
    //also maybe make more functions to retrieve one piece fo information about the user like getFirst,getLast,getEmail...
    return this.users;
  }
}
