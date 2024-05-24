import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Occupation } from 'src/app/models/Occupation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
  occupations: Occupation[] = []

  username!:string
  number!:string
  email!:string
  occupationId!:string
  password!:string
  passwordConfirm!:string
  
  constructor(private appService:AppService, private router:Router){}

  ngOnInit(): void {
    this.appService.getOccupations().subscribe((occs)=>{
      this.occupations = occs
    })
  }

  

  onSubmit(){  
    const formData = {
      username: this.username,
      number: this.number,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      occupationId: parseInt(this.occupationId)
    }
    this.appService.registerUser(formData).subscribe((res) => {
      console.log(res);
      
      if (res.status === 201) {
        //redirect to login
        this.router.navigateByUrl('/auth/login')
      }
    })
  }
}
