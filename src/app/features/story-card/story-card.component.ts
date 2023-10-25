import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class StoryCardComponent implements OnInit {
  joinedNetwork:any=0;
  totalExperience:any=0;
  totalDiversity:any=0;
  totalClients:any=0;
  

  ngOnInit(): void {
    this.increaseNumber();
  }

  increaseNumber(){
    const joinedNetworkStop:any=setInterval(() => {
      this.joinedNetwork++;
      if(this.joinedNetwork==100){
        clearInterval(joinedNetworkStop)
      }
    },10);
    const totalExperienceStop:any=setInterval(() => {
      this.totalExperience++;
      if(this.totalExperience==8){
        clearInterval(totalExperienceStop)
      }
    }, 10);
    const totalDiversityStop:any=setInterval(() => {
      this.totalDiversity=this.totalDiversity+10;
      if(this.totalDiversity==1000){
        clearInterval(totalDiversityStop)
      }
    }, 10);
    const totalClientsStop:any=setInterval(() => {
      this.totalClients++;
      if(this.totalClients==100){
        clearInterval(totalClientsStop)
      }
    }, 10);
  }

}
