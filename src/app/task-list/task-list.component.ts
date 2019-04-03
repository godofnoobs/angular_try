import { Component, OnInit, Input } from '@angular/core';
import Homework from '../../model/Homework';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    @Input() taskList: Homework[];

    blink: boolean = false;

    constructor() { }

    blinkOn(event: any) {
        this.blink = true;
        setTimeout(() => { this.blink = false; }, 500);
    }

    ngOnInit() {
    }

}
