import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegistrationPopupComponent } from './registration-popup/registration-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userRegistration';
  registrationDetails: any[] =[];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.registrationDetails.length);
    if(typeof (Storage) !== undefined && localStorage.getItem('Registration-Details')){
      console.log((JSON.parse(localStorage.getItem('Registration-Details') || '{}')));
      if( (JSON.parse(localStorage.getItem('Registration-Details') || '{}')) !== null) {
        this.registrationDetails = (JSON.parse(localStorage.getItem('Registration-Details') || '{}'));
      }

    }
  }

  openDialog() {
    const openDialog = this.dialog.open(RegistrationPopupComponent);
    openDialog.afterClosed().subscribe(result => {
      console.log(result);
      console.log(result.value);
      if(result.value !== null && result !== '') {
        this.registrationDetails.push(result.value);

        if(typeof (Storage) !== undefined) {
        localStorage.setItem('Registration-Details', JSON.stringify(this.registrationDetails));
        }
      }
    });
  }
}
