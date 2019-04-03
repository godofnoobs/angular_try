import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Homework from '../../model/Homework';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    constructor() { }

    @Input() task: Homework;

    @Output() onChanged = new EventEmitter<void>();

    change(): void {
        this.onChanged.emit();
    }

    ngOnInit() {
    }
}
