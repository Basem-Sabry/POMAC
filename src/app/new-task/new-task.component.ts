import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor() { }
  Users: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    newTaskForm!: FormGroup;
  ngOnInit(): void {
    this.newTaskForm= new FormGroup({
      title: new FormControl(null,Validators.required),
      User : new FormControl(null),
      desc: new FormControl(null,Validators.required),
      date: new FormControl(null),
      imgUr: new FormControl(null,Validators.required)


      
    })
  }
  get UserName() {
    return this.newTaskForm.get('User');
  }
  onsubmit(){
    console.log(this.newTaskForm)
  }

}
