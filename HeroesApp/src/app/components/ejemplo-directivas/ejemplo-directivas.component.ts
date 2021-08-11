import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directivas',
  templateUrl: './ejemplo-directivas.component.html',
  styleUrls: ['./ejemplo-directivas.component.css']
})
export class EjemploDirectivasComponent implements OnInit {

  public heroeList: string[]=['Batman', 'Robin', 'SpiderMan', 'AquaMan']

  public toggleElement: boolean=true

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValorPropiedad(){
    this.toggleElement=!this.toggleElement
  }
}