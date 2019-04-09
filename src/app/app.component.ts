import { Component } from '@angular/core';
import User from '../model/User';
import { UserListService } from './user-list.service';

const modalTypesDefault = {
    createUser: {
        name: 'createUser',
    },
};


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    modalTypes: any = modalTypesDefault;
    modal: string = undefined;
    userList: User[] = [];

    constructor(private userListService: UserListService) { }

    async getUserList(): Promise<any> {
        this.userList = await this.userListService.getUserlist();
    }

    showCreateUser(): void {
        this.modal = this.modalTypes.createUser.name;
        console.log(this.modal);
    }

    handleOk(): void {
        console.log('Ok', this);
    }

    handleCancel(): void {
        console.log('Cancel', this);
    }

    ngOnInit() {
        this.getUserList();
    }
}
