import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {

  services;

  constructor(
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.services = this.service.services;
  }

}
