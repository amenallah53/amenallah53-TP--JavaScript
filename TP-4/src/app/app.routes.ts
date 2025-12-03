import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./components/welcome/welcome').then(m => m.WelcomeComponent)
      },
      {
        path: 'articles',
        loadComponent: () => import('./components/articles/articles').then(m => m.ArticlesComponent)
      },
      {
        path: 'produits',
        loadComponent: () => import('./components/produits/produits').then(m => m.ProduitsComponent)
      },
      {
        path: 'taches',
        loadComponent: () => import('./components/taches/taches').then(m => m.TachesComponent)
      },
      {
        path: 'etudiants',
        loadComponent: () => import('./components/etudiants/etudiants').then(m => m.EtudiantsComponent)
      },
    ]
  }
]