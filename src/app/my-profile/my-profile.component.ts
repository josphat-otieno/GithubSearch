import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profile:any
  repos:any

  constructor(private githubService:GithubService) { 
    this.githubService.getProfileData().subscribe(profile =>{
      console.log(profile)
      this.profile=profile
    })
    this.githubService.getMyRepos().subscribe(repos =>{
      console.log(repos)
      this.repos=repos
    })
    
  }

  ngOnInit() {
  }

}
