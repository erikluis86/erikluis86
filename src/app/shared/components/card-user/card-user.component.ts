import { Component, OnInit, Input } from '@angular/core';
import { UserInterfaz } from '@data/interfaces/user.metadata';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input() data:UserInterfaz ={
    id:0, avatar:'', name:'', age:0, description:''     
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
