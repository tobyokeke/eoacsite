import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {


  services;

  index;
  service;
  constructor(
    private route: ActivatedRoute,
    private dataService : DataService
  ) {}

  ngOnInit(): void {
    this.services = this.dataService.services;
    this.index = this.route.snapshot.paramMap.get('index');
    for (let i = 0; i < this.services.length; i++) {
      if (this.index == this.services[i].link) {
        this.service = this.services[i];
      }
    }
  }

}
