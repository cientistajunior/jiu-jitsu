// src/app/services/evento.service.ts

import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento.interface'; // <-- Erro #2 Corrigido

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  // <-- Erro #1 Corrigido

  private eventos: Evento[] = [
    {
      imageUrl: 'assets/images/mundial.jpg',
      title: 'Mundial de Jiu-Jitsu 2025',
      subtitle: '15 de Junho, 2025',
      description: 'Long Beach, California',
      buttonText: 'Saiba Mais',
    },
    {
      imageUrl: 'assets/images/adcc.jpg',
      title: 'Pan American Championship',
      subtitle: '15 de Abril, 2025',
      description: 'Kissimmee, Florida',
      buttonText: 'Saiba Mais',
    },
    {
      imageUrl: 'assets/images/brasileiro.jpg',
      title: 'Brasileiro de Jiu Jitsu',
      subtitle: '01 de Maio, 2025',
      description: 'Barueri, São Paulo',
      buttonText: 'Saiba Mais',
    },
  ];

  constructor() {}

  getEventos(): Evento[] {
    return this.eventos;
  }
}
