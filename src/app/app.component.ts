import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './services/fetchdata/fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'netflix';
  constructor(private fetchdataService: FetchdataService) {}
  ngOnInit(): void {
    this.fetchdataService.fetchData();
  }
}
