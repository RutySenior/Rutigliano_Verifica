import { Component } from '@angular/core';
import { ThirdComponentComponent } from '../third-component/third-component.component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [ThirdComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  burzum: string ="secondo";
}
