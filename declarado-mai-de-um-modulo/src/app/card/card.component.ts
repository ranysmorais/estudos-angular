import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  tipo: string;
  preco: number;
  moeda: IMoeda;
  tipoCobranca: ITipoCobranca;
}

interface IMoeda {
  BRL: string;
  USD: string;
}

interface ITipoCobranca {
  mensal: string;
  anual: string;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',  
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  plano: IPlano = {
    tipo: 'Simples',
    preco: 1000.00,
    moeda: { BRL: 'R$', USD: '$' },
    tipoCobranca: { mensal: "/Mês", anual: "/Ano" },
  };
}
