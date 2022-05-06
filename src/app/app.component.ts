import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false
  logClick = [];
  
  


  constructor() {
    
  }

  onDisplayDetails() {
    this.showDetails = !this.showDetails
    this.logClick.push(this.logClick.length + 1)
  }
  

}
