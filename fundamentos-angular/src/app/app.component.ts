import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundamentos-angular';  
  buttonTitle = 'texto do botão';
  butttonDisabled = true;
  buttonEnabled = false;

  onButtonClick() {
    this.buttonTitle = 'botão clicado!';
    this.butttonDisabled = !this.butttonDisabled;
    this.buttonEnabled = !this.buttonEnabled;
  }
}
