import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../../services/spinner.service';


@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnInit {

    constructor(private spinnerService: SpinnerService) { }

    isLoading = false;

    ngOnInit() {
        this.spinnerService.spinner.subscribe((data: boolean) => {
            this.isLoading = data;
            console.log(data, 'data subscribed on spinner service');
        });
        console.log('Oninit app spinner called');
    }
}
