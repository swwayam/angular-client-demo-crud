import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  #dataService = inject(DataService);

  findAll = this.#dataService.findAll

  submitInfo(data: any) {
    this.#dataService.addUser(data.value)
  }

  getInfo(){
    this.#dataService.getAll()
  }

  deleteUser(id : string){
    this.#dataService.deleteUser(id)
  }
}
