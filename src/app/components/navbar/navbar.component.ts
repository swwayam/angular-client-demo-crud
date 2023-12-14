import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  #authService = inject(AuthService)
  #router = inject(Router)

  user : boolean = false
 
  ngOnInit(): void {
   this.#authService.isLoggedIn().subscribe((val: any) => {
      if(val){
        this.user = true
        console.log(true); 
      }else{
        this.user = false
        console.log(false);
      }
    })   
  }

  navigateToSignIn(){
    this.#router.navigateByUrl('/signin')
  }
 

  logout() {
    this.#authService.signout();
  }

  navigateToDash(){
    this.#router.navigateByUrl('/dashboard')
    return false

  }
}
