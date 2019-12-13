import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import {LoginUser} from './login';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })

};

@Injectable()
export class ListingService {
    constructor(private http: HttpClient) {
      this.getUser();
    }

    // send a POST request to the API to create a new data object
    save(user: User) {
        const body = JSON.stringify(user);
        return this.http.post('http://localhost:8080/api/question', body, httpOptions);
    }
    getUser() {
      return this.http.get('http://localhost:8080/api/answer', httpOptions);
    }

    login_user(log:LoginUser)
    {
    const body = JSON.stringify(log);
    return this.http.post('http://localhost:8080/api/login', body, httpOptions);
    }
  }
