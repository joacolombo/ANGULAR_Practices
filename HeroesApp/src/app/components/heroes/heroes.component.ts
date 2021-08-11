import { Component, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/interfaces/services/heroeServices/heroe.interface';
import { HeroeService } from '../../services/HeroeService/Heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroeList: IHeroe[] = [];

  constructor(public _heroeService: HeroeService) {
    this.heroeList = this._heroeService.GetAllHeroes();
    console.log(this.heroeList);
  }

  ngOnInit(): void {
  } 

}
