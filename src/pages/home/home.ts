import { EnsayosPage } from './../ensayos/ensayos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    

}

goToEnsayos() {
  this.navCtrl.setRoot(EnsayosPage)
}

}
