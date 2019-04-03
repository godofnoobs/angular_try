import { Injectable } from '@angular/core';

const userListPath = './assets/data/userList.json';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    constructor() { }

    async getUserlist(): Promise<any> {
        /*
        const options: object = {
            method: 'GET',
            body: 'text/plain;charset=UTF-8',
        }
        */
        const result: any = await fetch(userListPath);// , options);
        const userList: any = result.json();
        return userList;
    }
}
