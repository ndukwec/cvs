import {Component, OnInit} from '@angular/core';
import {Accounts, AccountService} from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cvs';

  constructor(private accountService: AccountService) {
  }

  accounts: Accounts[];
  more: boolean;
  ascendingAccountNumber: boolean;
  ascendingAvailableCash: boolean;
  signBeforeChangeNegative = '-';    // Used in getSign() method below
  signBeforeChangePositive = '+';    // Used in getSign() method below

  ngOnInit(){
    this.getCurrentAccounts();
  }

  getCurrentAccounts() {
    this.accountService.getAccounts().subscribe(result => {
      console.log(result);
      this.accounts = result;
    });
  }

  sortByAccountNumber() {
    if (this.accounts.length === 0) {
      console.log('The accounts array is empty :(');
      return;
    }
    this.accountService.ascendingAccountNumber = this.ascendingAccountNumber;
    return this.accountService.sort('sortByAccountNumber', this.accounts);
  }

  sortByAvailableCash() {
    if (this.accounts.length === 0) {
      console.log('The accounts array is empty :(');
      return;
    }
    this.accountService.ascendingAvailableCash = this.ascendingAvailableCash;
    return this.accountService.sort('sortByAvailableCash', this.accounts);
  }

  // Checks if given value is less than 1.0 to decide if we'll append a - or + in front of the value
  getSign(value) {
    return value < 1.0 ? this.signBeforeChangeNegative : this.signBeforeChangePositive;
  }
}
