import { UsersService } from './../services/users.service';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  constructor(private retrievedUser: UsersService){}
  user: Observable <any[]>;
  //usersList: AngularFireList<any>;
  /*constructor(db: AngularFireDatabase, retrieveUser: UsersService) {
    this.users = db.list('/UsersInfo').valueChanges();
    this.users.subscribe(val => console.log(val));
   }
  */
  uId = "";
  retrieveUser(){
    this.user = this.retrievedUser.getUser(this.uId);
  }
  ngOnInit() {
  }

}
