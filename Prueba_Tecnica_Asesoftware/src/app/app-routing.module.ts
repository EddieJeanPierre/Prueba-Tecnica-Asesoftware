import { ScheduleModule } from './features/schedule/schedule.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'inicio', loadChildren: () => import('@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'sesion', loadChildren: () => import('@features/session/session.module').then((m) => m.SessionModule)
  },
  {
    path: 'agendamiento', loadChildren: () => import('@features/schedule/schedule.module').then((m) => m.ScheduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
