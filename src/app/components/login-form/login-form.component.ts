import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email!:string
  password!:string
  
  constructor(private appService:AppService,private router:Router){}
  onSubmit(){
    
    const formData = {
      email: this.email,
      password: this.password,
    }
    this.appService.loginUser(formData).subscribe((res) => {
      if (res.status === 200) {
        //redirect to login
        this.router.navigateByUrl('/home')
      }
    })
  }
}
