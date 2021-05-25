import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user'
import { Repos } from '../repos'


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user!:User
  repository!:Repos
  repoData: any=[]
  newUserData:any=[]

  constructor(private http:HttpClient) {
    this.user= new User("", "", "", "", "", 0, new Date())
    this.repository= new Repos("", "", new Date(), "", "")
   }
   getUserDetails(username:string){
     interface ApiResponse{
       name:string,
       profilePhoto:string,
       userName: string,
       bioInfo:string,
       company:string,
       repoNumber:number,
       dateCreated:Date
     }
     let promise =new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" +username).toPromise().then(response=>{
         this.user.name=response.name
         this.user.profilePhoto=response.profilePhoto
         this.user.userName=response.userName
         this.user.bioInfo=response.bioInfo
         this.user.company=response.company
         this.user.repoNumber=response.repoNumber
         this.user.dateCreated=response.dateCreated

         resolve()
       },error=>{
         reject(error)
       })
       this.http.get<any>("https://api.github.com/users/" +username+"/repos").toPromise().then(response=>{
           for(let j=0; j<response.length; j++){
             this.newUserData=new Repos(response[j].name, response[j].description, response[j].dateUpdate, response[j].cloneUrl, response[j].language);
             this.repoData.push(this.newUserData)
           }
           resolve()
       },error=>{
         reject(error)
       })
     })
     return promise
   }
}
