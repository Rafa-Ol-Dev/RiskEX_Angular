import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  nome:string = 'Rafael Oliveira';
  botao:string = 'BOTÃO';
  logo:string = 'logo.png';
  menu:string[] = ['Menu 1', 'Menu 2', 'Menu 3'];
}
