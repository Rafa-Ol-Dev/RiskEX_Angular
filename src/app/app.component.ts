import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  nome:string = 'Olive Faz';
  creator:string = 'Rafael Oliveira';
  menu:string[] = ['Quem somos?', 'Peças', 'Contato'];
  quem:string = 'Quem somos?';
  pecas:string = 'Peças';
  items:string[] = ['Potinhos', 'Pratinhos', 'Porta Maternidade', 'Kit Higiene'];
  contato:string = 'Contato';
}
