import { Component, OnInit } from '@angular/core';
import { ITitleh1 } from '@data/interfaces/title.metadata';
import { UserInterfaz } from '@data/interfaces/user.metadata';


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

   public user: UserInterfaz = {
     id:1,
     avatar:'./assets/erik.jpg',
     name:'Erik Luis',
     age:36,
     description:'Desarrollador Full Stack'
   }
   constructor() { }

  ngOnInit(): void {
  }

}
