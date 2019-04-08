import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, SimpleChange } from '@angular/core';
import User from '../../model/User';
import Homework from '../../model/Homework';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

    @Input() user: User;
    @Input() selected: boolean;
    @Output() onUserSelect = new EventEmitter<User>();

    taskList: Homework[];

    constructor() { }

    ngOnInit() {
    }

    selectUserItem() {
        this.onUserSelect.emit(this.user);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.user) {
            this.taskList = changes.user.currentValue.taskList;
        }
    }

}
