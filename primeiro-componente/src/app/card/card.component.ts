import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({ required: true, alias: 'cardPlanType' }) cardPlanType: string = '';
  @Input({ required: true, alias: 'cardPlanPrice' }) cardPlanPrice: number = 0;

  buttonClicked(emitted: boolean) {
    console.log('buttonClicked: ' + emitted);
  }
}
