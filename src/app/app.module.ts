import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    PostListComponentComponent,
    ItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
