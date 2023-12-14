import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import {Auth, authState, signInWithEmailAndPassword} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #auth = inject(Auth)
  #http = inject(HttpClient)

  constructor() { }

  async signIn(email : string, password: string) : Promise<void>{
      try{
        await signInWithEmailAndPassword(this.#auth,email, password);
      }catch(err){
        console.log(err);
        alert("Invalid Credentials")
      }
  }

  isLoggedIn(): any{
    return authState(this.#auth)
  }

  signout(){
    try{
      this.#auth.signOut()
    }catch(err){
      console.log(err);
      alert("Signout failed")
    }
  }

 
}
