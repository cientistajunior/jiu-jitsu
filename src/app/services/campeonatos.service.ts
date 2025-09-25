import { Injectable } from '@angular/core';
import { Campeonato } from '../interfaces/campeonato.interface';

@Injectable({
  providedIn: 'root',
})
export class CampeonatosService {
  private campeonatos: Campeonato[] = [
    {
      title: 'Brasileiro de Jiu-Jitsu 2024',
      subtitle: '20 a 28 de Abril de 2024',
      description: 'Barueri, SP',
      imageUrl: 'assets/images/brasileiro.jpg',
      inscricaoAberta: false,
    },
    {
      title: 'Mundial de Jiu-Jitsu 2024',
      subtitle: '29 de Maio a 02 de Junho de 2024',
      description: 'Long Beach, CA',
      imageUrl: 'assets/images/mundial.jpg',
      inscricaoAberta: true,
    },
    {
      title: 'ADT Abu Dhabi World Pro',
      subtitle: '14 a 19 de Novembro de 2024',
      description: 'Abu Dhabi, UAE',
      imageUrl: 'assets/images/adcc.jpg',
      inscricaoAberta: true,
    },
    {
      title: 'Campeonato Mundial No-Gi',
      subtitle: '07 a 10 de Dezembro de 2024',
      description: 'Las Vegas, NV',
      imageUrl: 'assets/images/no-gi.jpg',
      inscricaoAberta: true,
    },
  ];

  constructor() {}

  getCampeonatos(): Campeonato[] {
    return this.campeonatos;
  }
}
