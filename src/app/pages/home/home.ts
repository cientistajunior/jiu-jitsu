// src/app/pages/home/home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService } from '../../services/evento.service'; // Importa o serviço
import { Evento } from '../../interfaces/evento.interface'; // Importa a interface
import { CardComponent } from '../../components/card/card';

@Component({
  selector: 'app-home',
  standalone: true, // Adicionando a propriedade standalone que estava faltando
  imports: [CommonModule, CardComponent],
  templateUrl: './home.html', // Corrigindo a extensão do arquivo
  styleUrls: ['./home.css'], // Corrigindo a propriedade e extensão
})
export class HomeComponent {
  eventos: Evento[] = [];

  // Injeta o serviço
  constructor(private eventoService: EventoService) {
    // Usa o serviço para buscar os dados
    this.eventos = this.eventoService.getEventos();
  }
}
