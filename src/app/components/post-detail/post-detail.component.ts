import { Component, Input } from '@angular/core';
import { Post } from '../../models/posts';
import { CommonModule } from '@angular/common';

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
}
