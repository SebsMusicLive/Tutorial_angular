import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";
import { BotonesComponent } from "./botones/botones.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from "./formulario2/formulario2.component";
import { ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from "./formulario3/formulario3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, BotonesComponent, FormularioComponent, BuclesComponent, SwitchComponent, Formulario2Component, ReactiveFormsModule, Formulario3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial angular';
}
