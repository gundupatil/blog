import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import { Post} from "./blog/post";
@Injectable()
export class PostService {

  constructor(private http: Http) { }
  headers = new Headers({
    'Content-Type': 'application/json',
  })

  getPosts():Observable<Post[]>{
    let url="http://0.0.0.0:3002/api/post1s";
    return this.http.get(url, {headers: this.headers}).map(res=> res.json()).catch(err=>{
      return Observable.throw(err);

    });

  }

  getPost(id: string): Observable<Post>{
    let url = "http://0.0.0.0:3002/api/post1s/" + id;
    return this.http.get(url, {headers: this.headers}).map(res=>res.json() as Post).catch(err=>{
      return Observable.throw(err);
    });
  }
}