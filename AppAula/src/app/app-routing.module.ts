import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacaoum',
    loadChildren: () => import('./pages/navegacaoum/navegacaoum.module').then( m => m.NavegacaoumPageModule)
  },
  {
    path: 'navegacaodois',
    loadChildren: () => import('./pages/navegacaodois/navegacaodois.module').then( m => m.NavegacaodoisPageModule)
  },
  {
    path: 'navegacaotres',
    loadChildren: () => import('./pages/navegacaotres/navegacaotres.module').then( m => m.NavegacaotresPageModule)
  },
  {
    path: 'navegacaoquatro',
    loadChildren: () => import('./pages/navegacaoquatro/navegacaoquatro.module').then( m => m.NavegacaoquatroPageModule)
  },
  {
    path: 'navegacaocinco',
    loadChildren: () => import('./pages/navegacaocinco/navegacaocinco.module').then( m => m.NavegacaocincoPageModule)
  },
  {
    path: 'testeum',
    loadChildren: () => import('./pages/testeum/testeum.module').then( m => m.TesteumPageModule)
  },
  {
    path: 'testedois',
    loadChildren: () => import('./pages/testedois/testedois.module').then( m => m.TestedoisPageModule)
  },
  {
    path: 'testetres',
    loadChildren: () => import('./pages/testetres/testetres.module').then( m => m.TestetresPageModule)
  },
  {
    path: 'testequatro',
    loadChildren: () => import('./pages/testequatro/testequatro.module').then( m => m.TestequatroPageModule)
  },
  {
    path: 'testecinco',
    loadChildren: () => import('./pages/testecinco/testecinco.module').then( m => m.TestecincoPageModule)
  },
  {
    path: 'testseis',
    loadChildren: () => import('./pages/testseis/testseis.module').then( m => m.TestseisPageModule)
  },
  {
    path: 'testsete',
    loadChildren: () => import('./pages/testsete/testsete.module').then( m => m.TestsetePageModule)
  },
  {
    path: 'testeseis',
    loadChildren: () => import('./pages/testeseis/testeseis.module').then( m => m.TesteseisPageModule)
  },
  {
    path: 'testesete',
    loadChildren: () => import('./pages/testesete/testesete.module').then( m => m.TestesetePageModule)
  },
  {
    path: 'testeoito',
    loadChildren: () => import('./pages/testeoito/testeoito.module').then( m => m.TesteoitoPageModule)
  },
  {
    path: 'testenove',
    loadChildren: () => import('./pages/testenove/testenove.module').then( m => m.TestenovePageModule)
  },
  {
    path: 'testedez',
    loadChildren: () => import('./pages/testedez/testedez.module').then( m => m.TestedezPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
