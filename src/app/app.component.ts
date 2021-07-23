import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onTerm(term: string) {
  // onTerm(event: Event) {
    console.log("search term", term); 
    // console.log("search term", event);
    // const target = event.target as HTMLInputElement;
    // const parsedValue = parseInt(target.value);
 
    // if (!isNaN(parsedValue)) {
	  //  this.length = parsedValue;
    //  } 

  }
}
