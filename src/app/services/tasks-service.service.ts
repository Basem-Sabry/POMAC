import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  constructor(private http:HttpClient) { }
   db_url = "https://pomac-db-default-rtdb.firebaseio.com/tasks.json";
   addTask(body: any){
    this.http.post(this.db_url,body).subscribe(res=>{console.log(res)})
   }
   getTasks(){
    return this.http.get(this.db_url)
   }

}
