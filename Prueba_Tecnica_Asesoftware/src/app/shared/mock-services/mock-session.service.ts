import { Injectable } from '@angular/core';
import { mockUser } from '@shared/mock-responses/mock-session.responses';
import { Observable, delay, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockSessionService {

  private userValid = mockUser;

  constructor(private http: HttpClient) { }

  simulateHttpError(): Observable<any> {
    const fakeUrl = 'https://example.com/api/login';
    return this.http.get(fakeUrl).pipe(
      catchError((error: any) => {
        return throwError(() => {
          return { message: 'Error al iniciar sesión', status: 500 };
        });
      })
    );
  }

  simulateHttpSuccess(userData: { userName: string, userPassword: string }): Observable<any> {
    return of(userData.userName == this.userValid.userName && userData.userPassword == this.userValid.userPassword).pipe(delay(1500));
  }

  validateUser(userData: { userName: string, userPassword: string }): Observable<any> {
    return userData.userName != "error" ? this.simulateHttpSuccess(userData) : this.simulateHttpError();
  }

}
