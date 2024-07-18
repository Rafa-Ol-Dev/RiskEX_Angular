import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  nome:string = 'Olive Faz';
  creator:string = 'Rafael Oliveira';
  
  quem:string = 'Quem somos';
  pecas:string = 'Peças';
  contato:string = 'Contato';
  

}
