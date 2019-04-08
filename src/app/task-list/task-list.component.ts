import { Component, OnInit, Input } from '@angular/core';
import Homework from '../../model/Homework';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    @Input() taskList: Homework[];
    @Input() visible: boolean;

    blink: boolean = false;

    constructor() { }

    blinkOn(): void {
        this.blink = true;
        setTimeout(() => { this.blink = false; }, 500);
    }

    ngOnInit() {
    }

}
