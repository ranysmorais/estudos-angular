import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: 1000.00,
    moeda: { BRL: 'R$', USD: '$' },
    tipoCobranca: { mensal: "/Mês", anual: "/Ano" },
  };
}
