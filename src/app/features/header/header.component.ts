import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disableButton = false;

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    
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
