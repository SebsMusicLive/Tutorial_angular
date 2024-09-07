import { Component } from '@angular/core';
import { Persona } from '../persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas:Persona [] = [
    {nombre:'Juan',edad:20},
    {nombre:'María',edad:18},
    {nombre:'Johan',edad:26},
    {nombre:'Alberto',edad:16},
    {nombre:'Alexandra',edad:10}
  ];
}
