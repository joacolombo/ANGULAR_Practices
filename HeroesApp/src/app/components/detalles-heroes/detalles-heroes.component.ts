import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/services/heroeServices/heroe.interface';
import { HeroeService } from '../../services/HeroeService/Heroe.service';

@Component({
  selector: 'app-detalles-heroes',
  templateUrl: './detalles-heroes.component.html',
  styleUrls: ['./detalles-heroes.component.css']
})
export class DetallesHeroesComponent implements OnInit {

  public DetailsHeroe:IHeroe;

  constructor(public _heroeService:HeroeService, private _activatedRoute:ActivatedRoute) {

    let heroeParams = this._activatedRoute.snapshot.params['nombreHeroe'];

    this.DetailsHeroe = this._heroeService.GetHeroe(heroeParams)!;
    
  }

  ngOnInit(): void {}
}
