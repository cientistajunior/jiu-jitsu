import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../../components/card/card';
import { CampeonatosService } from '../../services/campeonatos.service';
import { Campeonato } from '../../interfaces/campeonato.interface';

@Component({
  selector: 'app-campeonatos',
  imports: [CommonModule, MatIconModule, CardComponent],
  templateUrl: './campeonatos.html',
  styleUrl: './campeonatos.css',
})
export class CampeonatosComponent {
  campeonatos: Campeonato[] = [];

  constructor(private campeonatosService: CampeonatosService) {
    this.campeonatos = this.campeonatosService.getCampeonatos();
  }
}
