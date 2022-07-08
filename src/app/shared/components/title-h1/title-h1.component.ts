import { Component, Input, OnInit } from '@angular/core';
import { ITitleh1 } from '@data/interfaces/title.metadata';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.css']
})
export class TitleH1Component implements OnInit {

  @Input() data: ITitleh1 = {
    text:'',
    type:'primary'
  };
  @Input() descripcion: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
