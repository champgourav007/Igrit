import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from 'src/app/features/login-page/login-page.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  disableButton = false;
  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  openDialog(){
    if (!this.disableButton) {
   let dialogReff = this.dialog.open(LoginPageComponent, {
     width: '550px', height:'300px', position:{
       left:'480px'
     }
   });
   dialogReff.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
     
     // Enable the button again after the dialog is closed
     this.disableButton = false;
   });
     this.disableButton= true;
   }
 }

}
