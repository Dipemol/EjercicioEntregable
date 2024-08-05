import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentesComponent} from "./components/agentes/agentes.component";
import {AgenteComponent} from "./components/agente/agente.component";
import {AutorComponent} from "./components/autor/autor.component";
import {InicioComponent} from "./components/inicio/inicio.component";

const routes: Routes = [
  {
    path: 'Agentes',
    component: AgentesComponent
  },
  {
    path: 'Agente/:uuid',
    component: AgenteComponent
  },
  {
    path: 'Autor',
    component: AutorComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
