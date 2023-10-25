import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hiring-cards',
  templateUrl: './hiring-cards.component.html',
  styleUrls: ['./hiring-cards.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HiringCardsComponent implements OnInit {
  @Input('content') content: any;
  selectedTab:any="our hiring programs";
  heading:any;
  card_1_head:any;
  card_2_head:any;
  card_3_head:any;
  card_1_body:any;
  card_2_body:any;
  card_3_body:any;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    if(this.content=='hiring'){
      this.heading='Our Hiring Programs';
      this.card_1_head='RETURN IN TECH';
      this.card_1_body='Returning after your break! Apply here to kickstart your tech career again.';
      this.card_2_head='VOICE PROCESS';
      this.card_2_body='Looking for customer support role? Apply here and we will get you through.';
      this.card_3_head='SECOND CAREER';
      this.card_3_body='Are you looking to restart your career? Explore opportunities with us.';
      console.log('fhfh',this.heading);
    }
    if(this.content=='empower'){
      this.heading='How iGrit Empowers You';
      this.card_1_head='EXPLORE JOBS';
      this.card_1_body='Looking for a flexible job that suits your preferences? Let us help you find it.';
      this.card_2_head='UPSKILLS';
      this.card_2_body='Advance your career through our training and upskilling programs';
      this.card_3_head='COUNSELLING';
      this.card_3_body='Confused about your career? Let our expert counsellors help you find it.';

    }

  }
  onRuleTypeChange(e: any) {
    this.selectedTab = e.tab.textLabel.toLowerCase();
    console.log(this.selectedTab);
    
  }

}
