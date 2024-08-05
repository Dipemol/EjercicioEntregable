import { Component, OnInit } from '@angular/core';
import {Agente} from "../../common/agente";
import {AgentesService} from "../../services/agentes.service";

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {

  agentes: Agente[] = [];
  constructor(private agentesService: AgentesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.agentesService.getAgents().subscribe(
      (data:any) => {
            this.agentes = data.data;
      }
    )
  }
}
