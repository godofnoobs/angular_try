import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import User from '../../model/User';
import Homework from '../../model/Homework';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

    @Input() user: User;
    taskList: Homework[];
    selected: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    toggleClass() {
        this.selected = !this.selected;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.taskList = changes.user.currentValue.taskList;
    }

}
