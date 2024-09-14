import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

  constructor(public messagesService: MessagesService) {

   }

   message: string = '';

   addMessage() {
    this.messagesService.add(this.message);
    this.message = "";
   }
}
