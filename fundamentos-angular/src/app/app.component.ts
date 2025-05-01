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
  isDisabled = true;
  showPaasswordInput = false;
  passwordInputType = 'password';
  passwordInputTypeObj = { password: 'password', text: 'text' };


  enableInput() {
    this.isDisabled = false;
  }
  disabledInput() {
    this.isDisabled = true;
  }

  showPassword() {
    this.showPaasswordInput = !this.showPaasswordInput;

    const inputType = !this.showPaasswordInput ?
      this.passwordInputTypeObj.password
      : this.passwordInputTypeObj.text;

    this.passwordInputType = inputType;
  }

}
