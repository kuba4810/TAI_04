import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.css']
})
export class FilterPostsComponent implements OnInit {

  filterText : string;
  constructor() { }

  ngOnInit() {

  }

}
