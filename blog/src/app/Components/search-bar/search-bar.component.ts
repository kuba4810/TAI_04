import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText: string;
  @Output() name = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendFilter() {  
    this.name.emit(this.filterText);
  }

}
