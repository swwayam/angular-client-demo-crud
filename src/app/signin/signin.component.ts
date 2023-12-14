import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  #authService = inject(AuthService)
  #router = inject(Router)

  userInfo : any = {
    email: "",
    password: ""
  }

  signIn() : void{
    console.log(this.userInfo);
    this.#authService.signIn(this.userInfo.email, this.userInfo.password)
    this.#router.navigateByUrl("/")
  }
}
