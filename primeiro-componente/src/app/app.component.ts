import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiro-componente';  
  cardPlanType = 'Simples';
  cardPlanPrice = 29.99;
}
