import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  ref = firebase.database().ref('items/')
  inputText : string = '';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

    this.ref.on('value',Response =>{
      this.items = snapshotToArray(Response);
    });
  } 

  addItem(item){
    if( item !== undefined && item !== null ){
      let newItem = this.ref.push()
      newItem.set(item)
      this.inputText = ''
    }
  }

  async delItem(key){
    firebase.database().ref('items/' + key).remove();
  }

  editItem(key){
    let alert = this.alertCtrl.create({
      title: 'Edit Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Edit',
          handler: data => {
            if(data.name !== undefined && data.name.length > 0){
              firebase.database().ref('items/' + key).update({ name: data.name });
            }
          }
        }
      ]
    });
    alert.present();
  }

}
