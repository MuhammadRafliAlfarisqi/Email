import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Surat Masuk', url: '/folder/inbox', icon: 'mail' },
    { title: 'Surat Keluar', url: '/folder/outbox', icon: 'paper-plane' },
    
  ];
  public labels = [];
  constructor() {}
}
