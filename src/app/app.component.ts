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

  ngOnInit(){
    this.getCurrentAccounts();
  }

  getCurrentAccounts() {
    this.accountService.getAccounts().subscribe(result => {
      console.log(result);
      this.accounts = result;
    });
  }

  sortByNameAsc() {
    if (this.accounts.length === 0) {
      console.log('The accounts array is empty :(');
      return;
    }
    return this.accounts.sort((accountA, accountB) => {
      if (accountA.accountName > accountB.accountName){
        return 1;
      }
      if (accountA.accountName < accountB.accountName) {
        return -1;
      }
      return 0;
    });
  }

  sortByNameDesc() {
    if (this.accounts.length === 0) {
      console.log('The accounts array is empty :(');
      return;
    }
    return this.accounts.sort((accountA, accountB) => {
      if (accountA.accountName < accountB.accountName){
        return 1;
      }
      if (accountA.accountName > accountB.accountName) {
        return -1;
      }
      return 0;
    });
  }
}
