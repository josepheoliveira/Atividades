import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Navegação1', url: '/navegacaoum', icon: 'code' },
    { title: 'Navegação2', url: '/navegacaodois', icon: 'code' },
    { title: 'Navegação3', url: '/navegacaotres', icon: 'code' },
    { title: 'Navegação4', url: '/navegacaoquatro', icon: 'code' },
    { title: 'Navegação5', url: '/navegacaocinco', icon: 'code' },
    { title: 'Teste Um', url: '/testeum', icon: 'code' },
    { title: 'teste Dois', url: '/testedois', icon: 'code' },
    { title: 'teste Três', url: '/testetres', icon: 'code' },
    { title: 'teste Quatro', url: '/testequatro', icon: 'code' },
    { title: 'teste Cinco', url: '/testecinco', icon: 'code' },
    { title: 'Teste Seis', url: '/testeseis', icon: 'warning' },
    { title: 'teste Sete', url: '/testesete', icon: 'warning' },
    { title: 'teste Oito', url: '/testeoito', icon: 'warning' },
    { title: 'teste Nove', url: '/testenove', icon: 'warning' },
    { title: 'teste Dez', url: '/testedez', icon: 'warning' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
