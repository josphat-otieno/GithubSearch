import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
    username!:string
    detailsService!:UserDetailsService
    submitUsername(){
      this.detailsService.getUserDetails(this.username)

    }
  constructor(detailsService:UserDetailsService) { 
    this.detailsService=detailsService
  }

  ngOnInit(): void {
  }

}
