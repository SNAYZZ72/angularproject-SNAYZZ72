/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );
    return isUserAdmin;
  }

  constructor() { }
}
*/

import { Injectable } from '@angular/core';

interface User {
  login: string;
  password: string;
  role: 'user' | 'admin';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { login: 'admin', password: 'admin', role: 'admin' },
    { login: 'user', password: 'user', role: 'user' }
  ];
  currentUser: User | null = null;

  constructor() { }

  logIn(login: string, password: string): boolean {
    const user = this.users.find(user => user.login === login && user.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logOut() {
    this.currentUser = null;
  }

  isLogged(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): Promise<boolean> {
    return new Promise(resolve => resolve(this.currentUser?.role === 'admin'));
  }

  getCurrentUserRole(): string {
    return this.currentUser?.role ?? 'guest';
  }

}
