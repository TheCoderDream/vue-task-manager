import { of, Observable, BehaviorSubject, throwError } from 'rxjs'
import { tap, delay, switchMap } from 'rxjs/operators'

export interface User {
  id?: string;
  email: string;
  token?: string;
  fullName: string;
}

export const AuthServiceToken = Symbol('AuthServiceToken')

export const AuthService = {
  isAuthenticated: new BehaviorSubject<boolean>(false),
  login (username: string, password: string): Observable<User> {
    const uName = username?.trim().toLocaleLowerCase()
    const pass = password?.trim().toLocaleLowerCase()
    if (uName === 'admin@mail.com' && pass === '123') {
      return of({
        id: '123',
        email: 'admin@mail.com',
        token: 'jsonwebtoken',
        fullName: 'Emre Baskan'
      }).pipe(
        delay(1000),
        tap(() => this.isAuthenticated.next(true))
      )
    }
    return of(false)
      .pipe(
        delay(1000),
        switchMap(() => {
          this.isAuthenticated.next(true)
          return throwError('Incorrect username or password \n Email: admin@mail.com \n Password: 123')
        })
      )
  }
}
