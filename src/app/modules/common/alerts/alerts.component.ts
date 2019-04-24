import { Component, OnInit } from '@angular/core';
import {AlertsService} from '../../../services/alerts.service';

interface AlertInterface {
    type: string;
    message: string;
}

@Component({
    selector: 'app-alert-notifications',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {

    constructor(private alertService: AlertsService) { }

    alert = {} as AlertInterface;
    private alertClasses = ['alert'];
    private alertTypeClassMapping = {
        error: 'alert-danger',
        success: 'alert-success',
        warning: 'alert-warning'
    }

    clearAlert(){
        this.alert = {} as AlertInterface;
    }

    closeAlert(event) {
        this.clearAlert();
    }

    ngOnInit() {
        this.alertService.alert.subscribe((data: AlertInterface) => {
            this.alertClasses.push(this.alertTypeClassMapping[data.type]);
            this.alert = data;
        });
    }
}
