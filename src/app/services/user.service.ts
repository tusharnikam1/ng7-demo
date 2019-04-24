import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

  users: User[] = [{
    id: 1,
    first_name: 'demo',
    last_name: 'demo',
    email: 'demo@example.com',
    password: 'demo'
  }];
  loggedInUser: any = localStorage.getItem('loggedInUser') || null;
  redirectUrl: string;

  private defaultRoute  = '/users';

  constructor(private http: HttpClient, private router: Router) { }

  getRandomId(max: number = 5000) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  addUser(user: User) {
    return this.http.post(`${environment.api_url}users`, user);
  }

  login(data: User) {
    return this.http.post(`${environment.api_url}users/login`, data);
  }

  delete(id: number): User[] {
    this.users = this.users.filter((user) => {
      return user.id !== id;
    });
    return this.users;
  }

  logout() {
    this.loggedInUser = false;
  }

  loginRedirect(route: string = this.defaultRoute) {
    if (this.redirectUrl && this.redirectUrl !== '') {
        this.router.navigate([this.redirectUrl]);
        this.redirectUrl = '';
    } else {
        this.router.navigate([route]);
    }
  }

  setUser(user: object) {
    this.loggedInUser = user;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getUserToken(){
    const loggedInUser =  JSON.parse(localStorage.getItem('loggedInUser'));
    return loggedInUser.id;
  }

}
