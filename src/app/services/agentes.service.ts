import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  agentes = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES';
  agente = 'https://valorant-api.com/v1/agents'
  constructor(private http: HttpClient) { }

  getAgents(){
    return this.http.get(this.agentes);
  }

  getAgent(uuid: string){
    return this.http.get(this.agente+"/"+uuid+"?language=es-ES");
  }
}
