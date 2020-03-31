import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  path;
  services;
  constructor(

    private route: ActivatedRoute,
    private service: DataService
  ) {
  }

  ngOnInit(): void {
    this.services = this.service.services;
    this.path = window.location.pathname;
    console.log(window.location.pathname);
  }

}
