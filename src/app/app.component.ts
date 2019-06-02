import { Component } from '@angular/core';


import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Edu-Modue5-App';
  
  outputOfFormatedDate:String;
  inputDateTime: string;

  
  constructor() {
    let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4

    moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
    moment("20120620", "YYYYMMDD").fromNow(); // 7 years ago
    moment().startOf('day').fromNow();        // a day ago
    moment().endOf('day').fromNow();          // in an hour
    moment().startOf('hour').fromNow();       // 44 minutes ago

  }

  
  formatDateMoment() : void {

    this.outputOfFormatedDate  = moment(this.inputDateTime).fromNow();

  }


}
