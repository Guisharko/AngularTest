import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() postLoveIts: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;

  likeIt() {
    this.postLoveIts++;
  }
  dislikeIt() {
    this.postLoveIts--;
  }

  constructor() {
  }


  ngOnInit() {
  }
}
