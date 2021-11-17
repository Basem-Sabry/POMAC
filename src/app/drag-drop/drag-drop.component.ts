import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksServiceService } from '../services/tasks-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent  {
  alltasks: any[] | undefined;
  constructor(public dialog: MatDialog , private taskService:TasksServiceService) {
 taskService.getTasks().pipe(map((response:any )=>{
      const tasks = [];
      
      for(const key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({ ...response[key]})}
        }
        return tasks;
      })).subscribe(res=>{
       
        this.alltasks =  res})
      
    }

    
  openDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  todo = [{name:'first', desc : "hello"}];

  done = [{name:'first', desc : "hello"}];

  drop(event: CdkDragDrop<{ name: string; desc: string; }[], any, any>) {
    console.log(event.container.data)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
