import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'sumadora',
    loadChildren: () =>
      import('./pages/sumadora/sumadora.module').then(
        (m) => m.SumadoraPageModule
      ),
  },
  {
    path: 'traductor',
    loadChildren: () =>
      import('./pages/traductor/traductor.module').then(
        (m) => m.TraductorPageModule
      ),
  },
  {
    path: 'tabla',
    loadChildren: () =>
      import('./pages/tabla/tabla.module').then((m) => m.TablaPageModule),
  },
  {
    path: 'experiencia',
    loadChildren: () =>
      import('./pages/experiencia/experiencia.module').then(
        (m) => m.ExperienciaPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
