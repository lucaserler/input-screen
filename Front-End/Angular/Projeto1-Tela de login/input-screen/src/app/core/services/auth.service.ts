import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  public sing(payload:{email:string, password:string}):Observable<any>{
    return this.http.post(`${this.url}/sing`, payload).pipe(
      map((data) =>{
        return console.log(data)
      }),
      catchError((err)=>{
        return throwError(() => err.error.message);
      })
    )
  }
  constructor(private http: HttpClient) { }
}
