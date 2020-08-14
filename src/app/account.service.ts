import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private baseUrlForAccountAPI = 'http://localhost:3000';
  private accountsEndpointUrl = this.baseUrlForAccountAPI + '/accounts';


  getAccounts(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.accountsEndpointUrl);
  }

  createAccount(body: AccountRequest): Observable<Accounts> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Accounts>(this.accountsEndpointUrl, body, httpOptions);
  }

}

export class AccountRequest {
  id: number;
  accountName: string;
  availableCash: string;
  change: string;

  constructor(id: number, accountName: string, availableCash: string, change: string) {
    this.id = id;
    this.accountName = accountName;
    this.availableCash = availableCash;
    this.change = change;
  }
}

export interface Accounts {
  id: number;
  accountName: string;
  availableCash: string;
  change: string;
}
