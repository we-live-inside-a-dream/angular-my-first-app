import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
    /* other ways of writing the selecor
    * [app-server] // and the way you write it in the template is <div app-server ></div>
    * .app-server // and the way you write it in the template is <div class="app-server"></div>
    and the way to use i */ 
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  userName = ''
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
   

  ngOnInit(): void {
  }
  onCreateServer(): void {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value
    console.log(event)
  }
  
  onCreateUser() {
    this.userName = ''
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value
  }
}
