import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
