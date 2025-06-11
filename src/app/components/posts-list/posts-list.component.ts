import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post, PostCategory } from '../../models/posts';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  imports: [PostDetailComponent, CommonModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  // proprietà su cui mi baserò per creare l'html
  posts: Post[] = [];
  categories: PostCategory[] = [];

  // sono il componente e mi faccio dare il servizio da angular
  // alternativa 1: con inject
  ps: PostsService = inject(PostsService);

  // alternativa 2: con constructor
  // constructor(public ps: PostsService) {
  // }

  ngOnInit(): void {
    // appena il componente è pronto, recupero i dati che mi servono
    // e li metto nelle proprietà che mi sono preparato
    this.posts = this.ps.getPosts();
    this.categories = this.ps.getCategories();
  }

  filter(cat: PostCategory | undefined = undefined) {
    if (cat) {
      this.posts = this.ps.getPostsByCategory(cat);
    } else {
      this.posts = this.ps.getPosts();
    }
  }
}
