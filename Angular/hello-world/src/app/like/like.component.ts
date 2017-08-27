import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  @Output() change = new EventEmitter();

  onClick() {
    this.likesCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
    this.change.emit({ likesCount: this.likesCount, isLiked: this.isLiked });
  }
}

export interface LikeEventArgs {
  likesCount: number,
  isLiked: boolean
};
