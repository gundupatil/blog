import {RouterModule, Routes} from '@angular/router';
import { BlogComponent } from "./blog/blog/blog.component";
import {HomeComponent} from "./home/home.component";
import {PostDetailComponent} from "./blog/post-detail/post-detail.component";
import {PostFormComponent} from "./blog/post-form/post-form.component";
const appRoutes: Routes = [
  
  { path: 'blog',  component: BlogComponent },
  { path: 'blog/:id',  component: PostDetailComponent },
  { path: 'blog-add', component: PostFormComponent},
  { path: '',  component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  
  
 ];

 export const CONST_ROUTING = RouterModule.forRoot(appRoutes);