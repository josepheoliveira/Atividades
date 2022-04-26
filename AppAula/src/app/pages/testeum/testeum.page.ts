import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testeum',
  templateUrl: './testeum.page.html',
  styleUrls: ['./testeum.page.scss'],
})

export class TesteumPage implements OnInit {

  constructor( private testeumController: NavController) { }

  ngOnInit() {
  }

  showPageTesteseis(){
    this.testeumController.navigateForward('testeseis');
  }
}
