import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog/blog.component';
//import {Routes, RouterModule} from '@agnular/router';
import {CONST_ROUTING} from './app.routing';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { PostFormComponent } from './blog/post-form/post-form.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostDetailComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

