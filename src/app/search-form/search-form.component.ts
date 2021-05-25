import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { User } from '../user'
import { Repos } from '../repos'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  user!: User
  repository!: Repos
  repoDetails = []
  username!: string
  detailsService!: UserDetailsService
  submitUsername() {
    this.detailsService.getUserDetails(this.username)

  }
  constructor(detailsService: UserDetailsService) {
    this.detailsService = detailsService
  }

  ngOnInit() {
    this.user = this.detailsService.user
    this.repoDetails = this.detailsService.repoData
  }

}
