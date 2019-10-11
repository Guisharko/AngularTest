import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
