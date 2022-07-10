import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
//import USERS_DATA from '@data/constants/users.const';
import { ITitleh1 } from '@data/interfaces/title.metadata';
//import { UserInterfaz } from '@data/interfaces/user.metadata';
import { UserService } from '@data/services/user.service';



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

  //public id : number = 0;
  public description:string = 'Donde cada trabajador es fundamental';
  //public users:UserInterfaz[] = USERS_DATA;
  //public currentUser : any ;
  user:any;

   // route nos sirve para atrapar el id del usuario
   constructor(private activeRoute: ActivatedRoute, private userService:UserService) {
     /* this.id = +this.activeRoute.snapshot.params['id']
      //aki obtenemos el usuario buscandolo en el arreglo
      this.currentUser = this.users.find(user => user.id === this.id)
      console.log(this.currentUser)*/
      this.user = {
        id:0,
        avatar:'',
        name:'',
        age:0,
        description:'',
        work:''
      }
    }

  ngOnInit(): void {
    //aki rescatamos el parametro de la ruta
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.userService.getUser(params['id']).subscribe({
        next: c => {
         // console.log(c)
          this.user = c
         // this.edit = true
        },
        error : (err) => {
          console.log(err)
        }

      })
    }
  }

}
