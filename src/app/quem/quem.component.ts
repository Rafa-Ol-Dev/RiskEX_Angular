import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.component.html',
  styleUrl: './quem.component.scss'
})
export class QuemComponent {
  @Input() nome!: string;
  @Input() quem!: string;
}
