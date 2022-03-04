import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REST_API_URL } from '../../tokens';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
     @Inject(REST_API_URL) private restApiUrl: string
  ) {
    console.log('Injected value', restApiUrl);
  }
  
  getData(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/1`);
  }
}
