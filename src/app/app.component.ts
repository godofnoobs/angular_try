import { Component } from '@angular/core';
import User from '../model/User';
import { UserListService } from './user-list.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'task2';
    userList: User[] = [];

    constructor(private userListService: UserListService) { }

    async getUserList() {
        this.userList = await this.userListService.getUserlist();
    }

    ngOnInit() {
        this.getUserList();
    }
}
