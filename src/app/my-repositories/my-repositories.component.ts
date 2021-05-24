import { Component, OnInit } from '@angular/core';
// import { GithubService } from '../services/github.service'
import { Repository } from '../repository'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-my-repositories',
  templateUrl: './my-repositories.component.html',
  styleUrls: ['./my-repositories.component.css']
})
export class MyRepositoriesComponent implements OnInit {
  repos!:Repository
  constructor(private http:HttpClient){}
  ngOnInit() {
    interface ApiResponse{
      name:string
      description:string
    }
    this.http.get<ApiResponse>("https://api.github.com/users/josphat-otieno/repos").subscribe(response =>{
      this.repos=new Repository(response.name, response.description)
      console.log(this.repos)
    })
    
  }

}
