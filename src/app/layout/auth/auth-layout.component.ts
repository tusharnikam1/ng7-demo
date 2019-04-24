import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-auth',
    templateUrl: './auth-layout.component.html'
})

export class AuthLayoutComponent implements OnInit {
    ngOnInit() {
        console.log('Oninit login called');
    }
}
