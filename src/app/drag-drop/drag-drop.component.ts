import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksServiceService } from '../services/tasks-service.service';
import { map } from 'rxjs/operators';
import { TaskDetailsComponent } from '../task-details/task-details.component';


@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent  {
  alltasks: any[] =[];
  constructor(public dialog: MatDialog , private taskService:TasksServiceService,) {
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
        const dialogRef = this.dialog.open(NewTaskComponent,{autoFocus: true,panelClass: 'custom-dialog-container'});
        
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
      openDetails(x: any){
        const dialogRef = this.dialog.open(TaskDetailsComponent,{data:x,autoFocus: true});
        
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
      
      
      todo = [{name:'first', desc : "hello"}];
  done = [{title:'Angular', desc : "Angular Course I wanted to study",imgUr:'https://miro.medium.com/max/480/1*9A6E9kaZZ54idy0HLSlh-A.png',User:'Basem',date:"2021-11-01", status:'done'}];
      catched :any[]=[]  
  drop(event: CdkDragDrop<any[] , any[], any[]>) {
this.catched=event.container.data
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container.data)

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
