import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './app-blog-item.component.html',
  /*template: ` 
               <div class="blogItem fadeInDown animated" style="animation-delay: {{this.delay}}s" id="blogItem">
                  <blog-item-text [title]="title" [id]="id"></blog-item-text>
                  <blog-item-image [image]="image" [id]="id"> </blog-item-image>
               </div>
            `,*/
  styleUrls: ['./app-blog-item.component.css']
})
export class AppBlogItemComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() id: string;
  @Input() delay: number;
  delayValue;

  constructor() {
    this.delayValue = this.delay/5;
   }

  ngOnInit() {
   /*  var blogItems = document.querySelectorAll(".blogItem");
    console.log("Blog itemy: ", blogItems);
    blogItems.forEach( item=>{
        item.classList.remove("transparent");
    }); */
  }

}
