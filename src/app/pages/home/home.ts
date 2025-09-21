import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  // ADICIONE NOSSA LISTA DE CAMPEONATOS AQUI
  campeonatos = [
    {
      nome: 'Mundial de Jiu-Jitsu 2025',
      data: '15 de Junho, 2025',
      local: 'Long Beach, California',
    },
    { nome: 'Pan American Championship', data: '22 de Março, 2025', local: 'Kissimee, Florida' },
    { nome: 'Brasileiro de jiu-Jitsu', data: '29 de Abril, 2025', local: 'Barueri, São Paulo' },
  ];

  // ADICIONE NOSSA NOVA LISTA DE NOTÍCIAS AQUI
  noticias = [
    {
      categoria: 'MUNDIAL 2025',
      titulo: 'Mica Galvão busca o bicampeonato mundial em final eletrizante',
      resumo:
        'Após uma campanha impecável, o atleta amazonense enfrenta seu maior rival na final do peso médio...',
    },
    {
      categoria: 'ADCC',
      titulo: 'Gordon Ryan confirma participação no ADCC 2025',
      resumo:
        'O rei do submission sem imono connfirma presença e promete mais um show de técnica...',
    },
    {
      categoria: 'REGRAS',
      titulo: 'IBJJF anuncia novas regras para 2026',
      resumo:
        'Confederação divulga mudanças que visam deixar as lutas mais dinâmicas e com menos amarrações...',
    },
  ];

  // Ajustamos os dados para corresponderem aos @Ipunt()s do CardComponent
  eventos = [
    {
      imageUrl: 'assets/images/mundial.jpg',
      title: 'Mundial de Jiu-Jitsu 2025',
      subtitle: '15 de Junho, 2025',
      description: 'Long Beach, California',
      buttonText: 'saiba Mais',
    },
    {
      imageUrl: 'assets/images/adcc.jpg',
      title: 'Pan American Championship',
      subtitle: '15 de Abril, 2025',
      description: 'Kissimmee, Florida',
      buttonText: 'saiba Mais',
    },
    {
      imageUrl: 'assets/images/brasileiro.jpg',
      title: 'Brasileiro de Jiu Jitsu',
      subtitle: '01 de Maio, 2025',
      description: 'Barueri, São Paulo',
      buttonText: 'saiba Mais',
    },
  ];
}
