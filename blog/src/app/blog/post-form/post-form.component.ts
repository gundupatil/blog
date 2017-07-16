import { Component, OnInit } from '@angular/core';
import { Post } from "../blog/post";
import { PostService } from "app/blog/post.service";
import { Router, ActivatedRoute } from "@angular/router";
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: [PostService]
})
export class PostFormComponent implements OnInit {

  post:Post= new Post();
  errMessage="";
  constructor
  (private postService:PostService,
  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.post);
    // let do post this data to rest service...
    this.postService.createPost(this.post).subscribe(res=> {
      //we got successful sending the post to rest service
      console.log(res.id)//this is the post id we can use to redirect to view the detail of the post.
      //direct to view post
      this.router.navigate(['/blog', res.id]);

    }, err=>{

    console.log(err);
    
    this.errMessage="An error saving the post";
    })
  }
}
