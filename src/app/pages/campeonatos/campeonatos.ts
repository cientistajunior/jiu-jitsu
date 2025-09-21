import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../../components/card/card';

@Component({
  selector: 'app-campeonatos',
  imports: [CommonModule, MatIconModule, CardComponent],
  templateUrl: './campeonatos.html',
  styleUrl: './campeonatos.css',
})
export class CampeonatosComponent {
  // Copie esta lista de campeonatos
  campeonatos = [
    {
      title: 'Brasileiro de Jiu-Jitsu 2024',
      subtitle: '20 a 28 de Abril de 2024',
      description: 'Barueri, SP',
      imagemUrl: 'assets/images/brasileiro.jpg',
      inscricaoAberta: false,
    },
    {
      title: 'Mundial de Jiu-Jitsu 2024',
      subtitle: '29 de Maio a 02 de Junho de 2024',
      description: 'Long Beach, CA',
      imagemUrl: 'assets/images/mundial.jpg',
      inscricaoAberta: true,
    },
    {
      title: 'ADT Abu Dhabi World Pro',
      subtitle: '14 a 19 de Novembro de 2024',
      description: 'Abu Dhabi, UAE',
      imagemUrl: 'assets/images/adcc.jpg',
      inscricaoAberta: true,
    },
    {
      title: 'Campeonato Mundial No-Gi',
      subtitle: '07 a 10 de Dezembro de 2024',
      description: 'Las Vegas, NV',
      imagemUrl: 'assets/images/no-gi.jpg',
      inscricaoAberta: true,
    },
  ];
}
