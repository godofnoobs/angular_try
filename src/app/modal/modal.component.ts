import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import User from '../../model/User';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output() modalCancel = new EventEmitter<void>();
    @Output() modalOk = new EventEmitter<User>();

    constructor() { }

    ngOnInit() {
    }

    handleCancel(): void {
        console.log('Cancel inside');
        this.modalCancel.emit();
    }

    handleOk(): void {
        console.log('Ok inside');
        this.modalOk.emit({ 111: 222 });
    }

}
