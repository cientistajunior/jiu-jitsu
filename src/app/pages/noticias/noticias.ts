import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: 'Gordon Ryan confirma participação no ADCC 2024',
      fonte: 'FloGrappling',
      dataPublicacao: '15 de Setembro, 2025',
      resumo:
        'O maior nome do grappling mundial, Gordon Ryan, confirmou que buscará seu sexto título no ADCC, competindo na divisão super-pesado e no absoluto.',
      imagemUrl: 'assets/images/gordon-ryan.jpg', // Usaremos uma imagem local
      link: '#',
    },
    {
      titulo: 'Mica Galvão finaliza 5 oponentes e vence o GP da IBJJF',
      fonte: 'BJJ Heroes',
      dataPublicacao: '12 de Setembro, 2025',
      resumo:
        'O jovem fenômeno Mica Galvão teve uma performance espetacular no Grand Prix peso-médio da IBJJF, finalizando todos os seus adversários para levar o ouro.',
      imagemUrl: 'assets/images/mica-galvao.jpg', // Usaremos uma imagem local
      link: '#',
    },
    {
      titulo: 'IBJJF anuncia novas regras para 2026 com foco em dinamismo',
      fonte: 'Tatame Magazine',
      dataPublicacao: '10 de Setembro, 2025',
      resumo:
        'A Federação Internacional de Jiu-Jitsu Brasileiro anunciou um novo conjunto de regras que entrará em vigor em 2026, com o objetivo de diminuir as amarrações e aumentar a ação nas lutas.',
      imagemUrl: 'assets/images/ibjjf-regras.jpg', // Usaremos uma imagem local
      link: '#',
    },
  ];
}
