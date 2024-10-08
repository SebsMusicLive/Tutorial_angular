import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";
import { BotonesComponent } from "./botones/botones.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from "./formulario2/formulario2.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from "./formulario3/formulario3.component";
import { ChildrenComponent } from "./children/children.component";
import { AddMessageComponent } from "./add-message/add-message.component";
import { ListMessageComponent } from "./list-message/list-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ContadorComponent, BotonesComponent, FormularioComponent, BuclesComponent, SwitchComponent, Formulario2Component, ReactiveFormsModule, Formulario3Component, ChildrenComponent, AddMessageComponent, ListMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial angular';
}
