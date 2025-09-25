import { Injectable } from '@angular/core';
import { Noticia } from '../interfaces/noticia.interface';

@Injectable({
  providedIn: 'root',
})
export class noticiasService {
  private noticias: Noticia[] = [
    {
      title: 'Gordon Ryan confirma participação no ADCC 2024',
      subtitle: 'Fonte: FloGrappling',
      description:
        'O maior nome do grappling mundial, Gordon Ryan, confirmou que buscará seu sexto título no ADCC, competindo na divisão super-pesado e no absoluto.',
      imageUrl: 'assets/images/gordon-ryan.jpg',
      buttonText: 'Leia Mais',
      buttonLink: '#',
    },
    {
      title: 'Mica Galvão finaliza 5 oponentes e vence o GP da IBJJF',
      subtitle: 'Fonte: BJJ Heroes',
      description:
        'O jovem fenômeno Mica Galvão teve uma performance espetacular no Grand Prix peso-médio da IBJJF, finalizando todos os seus adversários para levar o ouro.',
      imageUrl: 'assets/images/mica-galvao.jpg',
      buttonText: 'Leia Mais',
      buttonLink: '#',
    },
    {
      title: 'IBJJF anuncia novas regras para 2026 com foco em dinamismo',
      subtitle: 'Fonte: Tatame Magazine',
      description:
        'A Federação Internacional de Jiu-Jitsu Brasileiro anunciou um novo conjunto de regras que entrará em vigor em 2026, com o objetivo de diminuir as amarrações e aumentar a ação nas lutas.',
      imageUrl: 'assets/images/ibjjf-regras.jpg',
      buttonText: 'Leia Mais',
      buttonLink: '#',
    },
  ];

  constructor() {}

  getNoticias(): Noticia[] {
    return this.noticias;
  }
}
