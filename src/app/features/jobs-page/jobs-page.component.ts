import { Component, OnInit } from '@angular/core';
// import { TableDataService } from 'src/app/features/table/table-data.service';
// import { Column } from '../table/table.interface';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {
  displayColumns: any = [];
  columnDefs: any[] = [];

  constructor(){}

  
  ngOnInit(): void {

  };


}
