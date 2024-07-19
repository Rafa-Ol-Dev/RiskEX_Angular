import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.component.html',
  styleUrl: './quem.component.scss',
})
export class QuemComponent {
  @Input() nome!: string;
  @Input() quem!: string;

  textoUm:string[] = [
    'Olá, meu nome é Evellyn Paixão. Sou pernambucana, mas vivo em São Paulo há 13 anos.',
    'A Olive nasceu da minha paixão por artes manuais e do meu desejo de ser mãe.',
    'Queria poder trabalhar de casa, ter tempo de qualidade com minha família e estar sempre presente para os meus meninos.'
  ];
  textoDois = undefined;
}
