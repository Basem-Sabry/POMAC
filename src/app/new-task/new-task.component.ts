import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
  Users: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    newTaskForm!: FormGroup;
  ngOnInit(): void {
    this.newTaskForm= new FormGroup({
      title: new FormControl(null,Validators.required),
      User : new FormControl(null),
      desc: new FormControl(null,Validators.required),
      date: new FormControl(null),
      imgUr: new FormControl(null,Validators.required),
      status: new FormControl('new')



      
    })
  }
  
  onsubmit(){
    // this.http.post('https://pomac-db-default-rtdb.firebaseio.com/tasks.json',this.newTaskForm.value).subscribe(x=>console.log(x))
    console.log(this.newTaskForm)
  }

}
