import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Route, Router } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { JobsPageComponent } from '../jobs-page/jobs-page.component';
import { EmployersCardComponent } from '../employers-card/employers-card.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disableButton = false;

  constructor(public dialog: MatDialog,private router:Router,){}

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
  openAboutUs(){
    let dialogReff = this.dialog.open(AboutUsComponent, {
      width:'800px', height:'500px',position:{

      }
    });
    dialogReff.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
    });
  }
  toJobs(){
    // this.router.navigate(['/jobs']);
    let dialogReff = this.dialog.open(JobsPageComponent, {
      width:'800px', height:'500px',position:{

      }
    });
    dialogReff.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
    });
  }

  toEmployers(){
    // this.router.navigate(['/jobs']);
    let dialogReff = this.dialog.open(EmployersCardComponent, {
      width:'800px', height:'500px',position:{

      }
    });
    dialogReff.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
    });
  }
}
