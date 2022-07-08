import { Component, OnInit } from '@angular/core';
import { ITitleh1 } from '@data/interfaces/title.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public titulo : ITitleh1 = {
    text:"Lista de Usuarios",
    type:'success'}

  constructor() { }

  ngOnInit(): void {
  }

}
