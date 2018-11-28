import { Component} from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent{
  constructor(private auth:AuthService){}
   
  email="";
  resetPassword(){
    //console.log(this.auth.helloWorld());
    //console.log(this.email);
    this.auth.resetPassword(this.email);
  }
  
}
