import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importamos o CardComponent
import { CardComponent } from '../../components/card/card';
import { noticiasService } from '../../services/noticias.service';
import { Noticia } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-noticias',
  standalone: true,
  // 2. Adicionamos o CardComponent aos imports
  imports: [CommonModule, CardComponent],
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css'],
})
export class NoticiasComponent {
  noticias: Noticia[] = [];

  constructor(private noticiasService: noticiasService) {
    this.noticias = this.noticiasService.getNoticias();
  }
}
