import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  nome:string = 'Olive Faz';
  creator:string = 'Rafael Oliveira';
  menu:string[] = ['i1', 'i2', 'i3'];
  quem:string = 'Quem somos';
  pecas:string = 'Peças';
  items:string[] = ['Cogumelo', 'Abelha', 'Porta Maternidade', 'Kit Higiene'];
  contato:string = 'Contato';
}
