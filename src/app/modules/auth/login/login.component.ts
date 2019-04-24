import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';


@Component({
    selector: 'app-user-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(private fb: FormBuilder, private router: Router, private userService: UserService){ }

    loginForm: FormGroup = this.fb.group({
        email: [''],
        password: ['']
    });

    ngOnInit() {
        if (this.userService.loggedInUser && this.userService.loggedInUser.id) {
            this.userService.loginRedirect();
        }
    }

    onSubmit() {
        this.userService.login(this.loginForm.value).subscribe((userResponse) => {
            if (userResponse) {
                this.userService.setUser(userResponse);
                this.userService.loginRedirect();
            }
        });
    }
}
