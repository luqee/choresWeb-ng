import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
  username!:string
  number!:string
  password!:string
  passwordConfirm!:string
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("Submiting register form");
    const formData = {
      username: this.username,
      number: this.number,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    }
  }
}
