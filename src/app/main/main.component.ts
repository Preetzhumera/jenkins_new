import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { uuid } from 'uuid';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  response: any;
  errorMessage: any;

  user: User;
  sub: any;
  route: any;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
  }

   addUserMethod() {
      const question = (document.getElementById('question') as HTMLInputElement).value;
      const answer = (document.getElementById('answer') as HTMLInputElement).value;
     // const uuidv4 = require('uuid/v4')
       const user = new User(uuid(), question, answer);
       this.listingService.save(user).subscribe(
        data  => { console.log('POST Request is successful ', data); },
        error  => { console.log('Error', error); });
    }
    listMethod() {

      this.listingService.getUser().subscribe(
        data  => { console.log('GET Request is successful ', data); },
        res => { console.log(res); });
}
}
