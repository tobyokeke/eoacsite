import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  constructor(
    public dataService : DataService
  ) { }

  ngOnInit(): void {
  }

}
