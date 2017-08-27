import { LikeEventArgs } from './like/like.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  tweet = {
    body: 'Here os the body oof a tweet...',
    isLiked: false,
    likesCount: 0
  };

  onLikeChange(eventArgs: LikeEventArgs) {
    this.tweet.isLiked = eventArgs.isLiked;
    this.tweet.likesCount = eventArgs.likesCount;
  };
}
