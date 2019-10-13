import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appareils: any[];
  posts: any[];
  isAuth = false;
  ButtonActive = null;

  constructor(private appareilService: AppareilService, private postService: PostService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ButtonStatus(name) {
    this.ButtonActive = name;
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    this.posts = this.postService.posts;
  }
}
