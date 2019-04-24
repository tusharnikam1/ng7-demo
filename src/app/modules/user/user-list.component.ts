import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../types/user';
import {UserService} from '../../services/user.service';
import * as $ from 'jquery';

import 'bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
    @Input() message: string;
    users: User[];
    constructor(private userService: UserService) { }

    ngOnInit() {
      this.loadUsers();


      // Testing jquery

      $(document).ready(() => {
        $(() => {
          $('[data-toggle="tooltip"]').tooltip();
        });
        console.log('Document ready');
      });
    }

    delete(id: number) {
      console.log(id, 'delete user called');
      this.users = this.userService.delete(id);
    }

    loadUsers(): void {
      /* this.userService.getUsers().subscribe(data => {
        this.users = data.data;
      }); */
      this.users = [];
      // this.users = this.userService.getUsers();
    }

}
