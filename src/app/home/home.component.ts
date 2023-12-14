import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  #dataService = inject(DataService)
  
  findNumber = this.#dataService.findByNumber
  findName = this.#dataService.findByName

  getInfo(val : any){
   if(/^[a-z]*$|^[0-9]{10}$/.test(val.data)){

    if(/\d/.test(val.data)){
     this.#dataService.getUserByNumber(val.data)
    }else{
     this.#dataService.getUserByName(val.data)

    }
   }
    
  }
  
}
