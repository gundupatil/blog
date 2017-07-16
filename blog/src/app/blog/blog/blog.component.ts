import { Component, OnInit } from '@angular/core';
import {Post} from "./post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [PostService]      
})
export class BlogComponent implements OnInit {
  title: string="Blog";
  posts: Post[]=[];

  constructor( private postService: PostService) {

   }

  ngOnInit() {
  // do request and get all blog entries
  this.postService.getPosts().subscribe(res=> {
    console.log(res);
    this.posts= res as Post[];
    }, err=>{
    console.log(err);
  })

  }

}
