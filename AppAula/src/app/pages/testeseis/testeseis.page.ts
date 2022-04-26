import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testeseis',
  templateUrl: './testeseis.page.html',
  styleUrls: ['./testeseis.page.scss'],
})

export class TesteseisPage implements OnInit {

  constructor( private testeseisController: NavController) { }

  ngOnInit() {
  }

  showPageTesteum(){
    this.testeseisController.navigateForward('testeum');
  }
}
