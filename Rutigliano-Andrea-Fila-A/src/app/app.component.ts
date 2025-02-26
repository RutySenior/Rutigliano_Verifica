import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rutigliano-Andrea-Fila-A';
  burzum: string = "app";
}
