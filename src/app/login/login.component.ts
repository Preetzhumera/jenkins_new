import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../login';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   log:LoginUser;

    constructor(public listingService: ListingService) {

        }


  ngOnInit() {
  }
LoginUserMethod()
{
       const username = (document.getElementById('username') as HTMLInputElement).value;
       const password = (document.getElementById('password') as HTMLInputElement).value;

        const log = new LoginUser( username, password);
        this.listingService.login_user(log).subscribe(
         data  => { console.log('POST Request is successful ', data); },
         error  => { console.log('Error', error); });
     }
}

