import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
    /* other ways of writing the selecor
    * [app-server] // and the way you write it in the template is <div app-server ></div>
    * .app-server // and the way you write it in the template is <div class="app-server"></div>
    and the way to use i */ 
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
