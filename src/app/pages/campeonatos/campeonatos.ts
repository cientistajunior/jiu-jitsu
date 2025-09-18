import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-campeonatos',
  imports: [CommonModule, MatIconModule],
  templateUrl: './campeonatos.html',
  styleUrl: './campeonatos.css',
})
export class CampeonatosComponent {
  // Copie esta lista de campeonatos
  campeonatos = [
    {
      nome: 'Brasileiro de Jiu-Jitsu 2024',
      data: '20 a 28 de Abril de 2024',
      local: 'Barueri, SP',
      imagemUrl: 'assets/images/brasileiro.jpg',
      inscricaoAberta: false,
      tipo: 'Gi',
    },
    {
      nome: 'Mundial de Jiu-Jitsu 2024',
      data: '29 de Maio a 02 de Junho de 2024',
      local: 'Long Beach, CA',
      imagemUrl: 'assets/images/mundial.jpg',
      inscricaoAberta: true,
      tipo: 'Gi',
    },
    {
      nome: 'ADT Abu Dhabi World Pro',
      data: '14 a 19 de Novembro de 2024',
      local: 'Abu Dhabi, UAE',
      imagemUrl: 'assets/images/adcc.jpg',
      inscricaoAberta: true,
      tipo: 'Gi & No-Gi',
    },
    {
      nome: 'Campeonato Mundial No-Gi',
      data: '07 a 10 de Dezembro de 2024',
      local: 'Las Vegas, NV',
      imagemUrl: 'assets/images/no-gi.jpg',
      inscricaoAberta: true,
      tipo: 'No-Gi',
    },
  ];
}
