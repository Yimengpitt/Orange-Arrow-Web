import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  users: Observable <any[]>;
  //usersList: AngularFireList<any>;
  constructor(db: AngularFireDatabase) {
    this.users = db.list('/UsersInfo').valueChanges();
    this.users.subscribe(val => console.log(val));
   }

  ngOnInit() {
  }

}
