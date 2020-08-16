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

  // Use below if we have to create accounts via post but out of scope for this assignment
  createAccount(body: AccountRequest): Observable<Accounts> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Accounts>(this.accountsEndpointUrl, body, httpOptions);
  }

  // Sort method below takes in a criteria/field to sort and an array of Accounts to sort
  sort(criteria: string, accounts: Accounts[]): Accounts[] {
    if (criteria === '' || criteria === undefined) {
      console.log('Sort method was called without a given criteria');
      return;
    }
    if (criteria === 'sortByAccountNumberAsc'){
      return accounts.sort((accountA, accountB) => {
        const accountNumberA = accountA.accountName.split('-')[1];
        const accountNumberB = accountB.accountName.split('-')[1];
        if (accountNumberA > accountNumberB){
          return 1;
        }
        if (accountNumberA < accountNumberB) {
          return -1;
        }
        return 0;
      });
    }
    if (criteria === 'sortByAccountNumberDesc'){
      return accounts.sort((accountA, accountB) => {
        const accountNumberA = accountA.accountName.split('-')[1];
        const accountNumberB = accountB.accountName.split('-')[1];
        if (accountNumberA < accountNumberB){
          return 1;
        }
        if (accountNumberA > accountNumberB) {
          return -1;
        }
        return 0;
      });
    }
    if (criteria === 'sortByAvailableCashDesc') {
      return accounts.sort((accountA, accountB) => {
        const availableCashForAccountA = accountA.availableCash;
        const availableCashForAccountB = accountB.availableCash;
        if (availableCashForAccountA < availableCashForAccountB){
          return 1;
        }
        if (availableCashForAccountA > availableCashForAccountB) {
          return -1;
        }
        return 0;
      });
    }
    if (criteria === 'sortByAvailableCashAsc') {
      return accounts.sort((accountA, accountB) => {
        const availableCashForAccountA = accountA.availableCash;
        const availableCashForAccountB = accountB.availableCash;
        if (availableCashForAccountA > availableCashForAccountB){
          return 1;
        }
        if (availableCashForAccountA < availableCashForAccountB) {
          return -1;
        }
        return 0;
      });
    }
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
