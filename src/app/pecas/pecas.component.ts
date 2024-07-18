import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrl: './pecas.component.scss'
})
export class PecasComponent {
  @Input() pecas!: string;
}
