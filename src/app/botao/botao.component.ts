import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})

export class BotaoComponent {
  @Input() botao!: string;
}
