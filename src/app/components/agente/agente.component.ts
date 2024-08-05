import { Component, OnInit } from '@angular/core';
import {Agente} from "../../common/agente";
import {ActivatedRoute} from "@angular/router";
import {AgentesService} from "../../services/agentes.service";

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {

  miAgente: Agente =  {
    uuid: '',
    displayName: '',
    description: '',
    developerName: '',
    characterTags: null,
    displayIcon: '',
    displayIconSmall: '',
    bustPortrait: '',
    fullPortrait: '',
    fullPortraitV2: '',
    killfeedPortrait: '',
    background: '',
    backgroundGradientColors: [],
    assetPath: '',
    isFullPortraitRightFacing: false,
    isPlayableCharacter: false,
    isAvailableForTest: false,
    isBaseContent: false,

    role: {
      uuid: '',
      displayName: '',
      description: '',
      displayIcon: '',
      assetPath: ''
    },
    abilities: [
      {
        slot: '',
        displayName: '',
        description: '',
        displayIcon: ''
      },
      {
        slot: '',
        displayName: '',
        description: '',
        displayIcon: ''
      },
      {
        slot: '',
        displayName: '',
        description: '',
        displayIcon: ''
      },
      {
        slot: '',
        displayName: '',
        description: '',
        displayIcon: ''
      }
    ],
    voiceLine: {
      minDuration: 0,
      maxDuration: 0,
      mediaList: [
        {
          id: 0,
          wwise: '',
          wave: ''
        }
      ]
    }
  }
  constructor(private activatedRoute:ActivatedRoute, private agentesService:AgentesService) { }

  ngOnInit(): void {
    this.loadAgente();
  }

  private loadAgente() {
    const parametros = this.activatedRoute.snapshot.params;
    this.agentesService.getAgent(parametros['uuid']).subscribe(
      (data:any) => {
        this.miAgente = data.data;
      }
    )
  }
}
