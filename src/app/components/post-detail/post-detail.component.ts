import { Component, inject, Input } from '@angular/core';
import { Post } from '../../models/posts';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  // proprietà su cui mi baserò per creare l'html
  @Input()
  post?: Post;

  ps: PostsService = inject(PostsService);
}
