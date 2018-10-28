import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './app-blog-item.component.html',
  template: ` 
               <blog-item-text [title]="title" [id]="id"></blog-item-text>
               <blog-item-image [image]="image" [id]="id"> </blog-item-image>
            `,
  styleUrls: ['./app-blog-item.component.css']
})
export class AppBlogItemComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() id: string;
  constructor() { }

  ngOnInit() {
  }

}
