import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/services/heroeServices/heroe.interface';
import { HeroeService } from 'src/app/services/HeroeService/Heroe.service';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.css']
})
export class BuscarHeroesComponent implements OnInit {

  heroeList: IHeroe[] = [];

  constructor(private _heroeService:HeroeService, private _activatedRoute:ActivatedRoute) {

    this._activatedRoute.params.subscribe((params)=>{
      this.heroeList = this._heroeService.GetHeroByName(params.nombreHeroe);
    });
   }

  ngOnInit(): void {
  }

}
