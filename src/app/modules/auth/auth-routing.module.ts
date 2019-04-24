import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AuthLayoutComponent} from '../../layout/auth/auth-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        }]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})


export class AuthRoutesModule { }
