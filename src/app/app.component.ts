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

  sortByAsc() {
  }

  sortByDesc() {
  }
}
