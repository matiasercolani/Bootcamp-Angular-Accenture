import{FormControl,FormGroup,Validators} from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  errorSession:boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie:CookieService, private router:Router) { }
  
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }

  sendLogin():void{
    const {email, password}= this.formLogin.value
    this.authService.sendCredentials(email, password)
    .subscribe(resposeOK=>{
      console.log('Session iniciada correcta');
      const{tokenSession, data} = resposeOK;
      this.cookie.set('token', tokenSession, 4, '/');
      this.router.navigate(['/','tracks'])
    },
    err=>{
      this.errorSession = true;
      console.log('Ocurrio error con tu email o password');
    })
  }
}
