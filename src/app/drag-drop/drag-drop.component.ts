import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent  {

  todo = [{name:'first', desc : "hello"}, {name:'second', desc : "hello2"}, {name:'third', desc : "hello3"}, {name:'forth', desc : "hello4"}];

  done = [{name:'first', desc : "hello"}, {name:'first', desc : "hello"}, {name:'first', desc : "hello"}, {name:'first', desc : "hello"}, {name:'first', desc : "hello"}];

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
