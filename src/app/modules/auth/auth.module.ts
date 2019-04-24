import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthRoutesModule} from './auth-routing.module';
import {SignupComponent} from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthLayoutComponent} from '../../layout/auth/auth-layout.component'

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        AuthLayoutComponent
    ],
    imports: [
        CommonModule,
        AuthRoutesModule,
        ReactiveFormsModule
    ]
})

export class AuthModule { }
