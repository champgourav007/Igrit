import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  selectedTab:any='recuiter login';
  userLoginForm = new FormGroup({
    'insurer_email': new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'confirm_password':new FormControl('',[Validators.required]),
    'termsChecked': new FormControl('',[Validators.required])
  });
  recuiterLoginForm = new FormGroup({
    'insurer_email': new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'termsChecked': new FormControl('',[Validators.required])

  });

  constructor( public dialogRef: MatDialogRef<LoginPageComponent>){}

  ngOnInit(): void {

  }

  onRuleTypeChange(e: any) {
    this.selectedTab = e.tab.textLabel.toLowerCase();
  }

  onNoClick(): void {
    // this.dialogRef.close();
    console.log(this.recuiterLoginForm);
    
  }

}
