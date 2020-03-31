import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  services;
  constructor(
    public dataService : DataService
  ) { }

  ngOnInit(): void {
    this.services = this.dataService.services;
  }

}
