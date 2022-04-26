import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacaodois',
  templateUrl: './navegacaodois.page.html',
  styleUrls: ['./navegacaodois.page.scss'],
})
export class NavegacaodoisPage implements OnInit {

  constructor( private navegacaoController: NavController) { }

  ngOnInit() {
  }

  ShowPageNavegacao(){
    this.navegacaoController.navigateForward('navegacao');
  }

}
