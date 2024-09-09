import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {
  name= new FormControl('Sebas');
  email= new FormControl('sebas@gmail.com');
}
