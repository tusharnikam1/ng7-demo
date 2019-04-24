import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-signup',
    templateUrl: './signup.component.html'
})


export class SignupComponent implements OnInit {

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router){}
    userForm: FormGroup = this.fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(4)]) ,
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*\d).{4,8}$')]]
    });

    ngOnInit(){ }

    onSubmit() {
        console.log('OnSubmit called');
        this.userService.addUser(this.userForm.value).subscribe((newUserResponse)=>{
            alert('New User Created!!');
        });
        this.userForm.reset();
    }
}
