import { Component, OnInit } from '@angular/core';
import { ITitleh1 } from '@data/interfaces/title.metadata';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public title : ITitleh1 = {
    text:"Detalle de Usuario",
    type:'secondary'
  } ;
   public description:string = 'Cada trabajador es fundamental';
   constructor() { }

  ngOnInit(): void {
  }

}
