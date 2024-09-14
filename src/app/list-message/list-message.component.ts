import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {
  constructor(public messagesService: MessagesService) { }
}
