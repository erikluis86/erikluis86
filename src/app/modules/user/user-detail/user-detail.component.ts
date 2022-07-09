import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import USERS_DATA from '@data/constants/users.const';
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
  };

  public id : number = 0;
  public description:string = 'Donde cada trabajador es fundamental';
  public users:UserInterfaz[] = USERS_DATA;
  public currentUser : any ;

   // route nos sirve para atrapar el id del usuario
   constructor(private route: ActivatedRoute) {
      this.id = +this.route.snapshot.params['id']
      //aki obtenemos el usuario buscandolo en el arreglo
      this.currentUser = this.users.find(user => user.id === this.id)
      console.log(this.currentUser)
    }

  ngOnInit(): void {
  }

}
