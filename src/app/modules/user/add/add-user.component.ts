import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {UserListComponent} from '../user-list.component';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html'
})


export class AddUserComponent implements OnInit, AfterViewInit {

    message: any;
    @ViewChild(UserListComponent) messageViewChild: UserListComponent;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router){}
    userForm: FormGroup = this.fb.group({
        first_name: new FormControl('', [Validators.required, Validators.minLength(4)]) ,
        last_name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*\d).{4,8}$')]]
    });

    ngOnInit(){
        this.message = 'This is user list';
    }

    ngAfterViewInit() {
        console.log(this.messageViewChild);
    }

    onSubmit() {
        console.log('OnSubmit called');
        this.userService.addUser(this.userForm.value);
        // this.router.navigate(['/users']);
    }
}
