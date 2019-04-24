import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserListComponent} from './user-list.component';
import {UserRoutesModule} from './user-routes.module';
import {AddUserComponent} from './add/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
      UserListComponent,
      AddUserComponent
    ],
    imports: [
      CommonModule,
      UserRoutesModule,
      ReactiveFormsModule
    ]
})

export class UserModule { }
