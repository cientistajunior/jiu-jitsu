import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-article',
  imports: [CommonModule],
  templateUrl: './news-article.html',
  styleUrl: './news-article.css',
})
export class NewsArticleComponent {
  // 1. O decorator @Input() permite que esta propriedade receba dados de fora
  // 2. O '!' diz ao TypeScript para confiar em nós, que este valor sempre existirá
  @Input() noticia!: any;
}
