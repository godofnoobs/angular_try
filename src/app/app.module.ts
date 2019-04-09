import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserItemComponent,
        TaskListComponent,
        TaskItemComponent,
        UserCreateComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
