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
  widthButton1 = '110px';
  widthButton2 = 120;
  stylesObj = {
    backgroundColor: 'grey',
    width: '160px'
  }

  updateStyleObj() {
    this.stylesObj = {
      backgroundColor: 'lightblue',
      width: '170px'
    }
  }

  updateStyleWidth() {
    this.widthButton2 = 150;
  }
}
