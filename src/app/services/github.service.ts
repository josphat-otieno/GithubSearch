import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string
  private myRepos: any

  constructor(private http:HttpClient) { 
    this.username="josphat-otieno"
    this.myRepos="repos"
  }
  getProfileData(){
    return this.http.get("https://api.github.com/users/josphat-otieno")
  };
  getMyRepos(){
    return this.http.get("https://api.github.com/users/josphat-otieno/repos")
  }
}

