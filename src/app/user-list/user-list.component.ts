import { Component, OnInit, Input } from '@angular/core';
import User from '../../model/User';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    @Input() userList: User[];

    selectedInd = undefined;

    constructor() { }

    ngOnInit() {
        console.log(this.userList);
    }

    selectedCondition(user: User): void {
        console.log('RECEIVED USER', user);
    }

    setSelectedInd(user: User): void {
        const selectedInd = this.userList.findIndex(it => it === user);
        console.log('SELECTED_INDEX', selectedInd);
        this.selectedInd = selectedInd;
    }

}
