import { HttpClient } from '@angular/common/http';
import { Injectable , WritableSignal, inject, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  #http = inject(HttpClient)

  findByNumber : WritableSignal<any> = signal({})
  findByName : WritableSignal<any> = signal([])
  findAll : WritableSignal<any> = signal([])
  constructor() { }

  getUserByNumber(data : string){
    this.#http.get(`http://localhost:8080/v1/user/phone/${data}`).subscribe(
      (val) => {
        // Handle successful response
        this.findByNumber.set(val)
      },
      (error) => {
        // Handle error
        if(error.status == 404){
          alert("User not found")
        }else{
          alert("Contact Administrator")
        }
      }
    );
    
  }

  getUserByName(data : string){

    this.#http.get(`http://localhost:8080/v1/user/name/${data}`).subscribe(
      (val) => {
        // Handle successful response
        this.findByName.set(val)
        
      },
      (error) => {
        // Handle error
   
        
        if(error.status == 404){
          alert("User not found")
        }else{
          alert("Contact Administrator")
        }
      }
    );
   
    
  }

  
  addUser(data : string){
    const headers = { 'content-type': 'application/json'}  
    const body= JSON.stringify(data);
    
    this.#http.post(`http://localhost:8080/v1/new/user`, body, {headers: headers}).subscribe(
      (val) => {
        // Handle successful response
        console.log(val);
      },
      (error) => {
        // Handle error
        if(error.status == 400){
          alert("User already present")
        }else{
          alert("Contact Administrator")
        }
      }
    );
   
    
  }

  getAll(){
    
    this.#http.get(`http://localhost:8080/v1/user/all`).subscribe(
      (val) => {
        // Handle successful response
        this.findAll.set(val)
        
      },
      (error) => {
        // Handle error
        console.log(error);
        
        
        if(error.status == 404){
          this.findAll.set([])
          alert("No users present in database")
        }else{
          alert("Contact Administrator")
        }
      }
    );
   
  }


  deleteUser(id : any){
    const headers = { 'content-type': 'application/json'}  
    const body= JSON.stringify(id);
    
    this.#http.post(`http://localhost:8080/v1/delete/user`, body, {headers: headers}).subscribe(
      (val) => {
        // Handle successful response
        console.log(val);
        this.getAll()
      },
      (error) => {
        // Handle error
        if(error.status == 400){
          alert("User already present")
        }else{
          alert("Contact Administrator")
        }
      }
    );
  }
}
