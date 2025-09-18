import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CampeonatosComponent } from './pages/campeonatos/campeonatos';
import { NoticiasComponent } from './pages/noticias/noticias';
import { ContatoComponent } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'campeonatos', component: CampeonatosComponent }, // Página de campeonatos
  { path: 'noticias', component: NoticiasComponent }, // Página de notícias
  { path: 'contato', component: ContatoComponent }, // Página de contato
];
