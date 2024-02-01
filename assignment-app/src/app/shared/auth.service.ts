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

  register(login: string, password: string): boolean {
    const userExists = this.users.some(user => user.login === login);

    if (userExists) {
      return false;
    }

    this.users.push({ login, password, role: 'user' });
    return true;
  }

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
