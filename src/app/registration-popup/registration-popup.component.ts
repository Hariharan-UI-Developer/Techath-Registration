import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-popup',
  templateUrl: './registration-popup.component.html',
  styleUrls: ['./registration-popup.component.css']
})
export class RegistrationPopupComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationDetails: any[] =[];
  constructor(private formBuilder: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['',Validators.required],
      address1: ['',Validators.required],
      address2: ['', Validators.required],
      district: ['', Validators.required],
      state: ['',Validators.required],
      pincode: ['', Validators.required]
    });
  }

  onSave() {
    this.registrationDetails.push(this.registrationForm.value);
    // this.route.navigateByUrl('app-root');
  }

}
