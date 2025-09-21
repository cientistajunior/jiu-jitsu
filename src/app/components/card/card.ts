import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class CardComponent {
  // Nossas "portas de entrada" de dados..
  // Tudo que um componente pai passar, será recebido porr estas propriedades.

  @Input() imageUrl: string = '';
  @Input() title: string = 'Título padrão';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = 'Saiba Mais';
  @Input() buttonLink: string = '#';

  // Adicionamos também o CommonModule nos imports,
  // pois nossotemplate vai precisar de diretivas como *ngIf.
}
