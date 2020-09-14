import { Component, OnInit } from '@angular/core';
import {AwesomeService} from '../../services/awesome.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  awesomes;
  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.awesomeService.getAll().subscribe(data => {
      console.log(data);
      this.awesomes = data;
    });
  }

}
