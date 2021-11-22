import { Task } from "./task.model";
export class Column {

    constructor(public name: string, public tasksName: string[],public taskImg: string[],public taskDesc: string[]) {}
}