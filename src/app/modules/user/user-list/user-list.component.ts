import { Component, OnInit } from '@angular/core';
//import USERS_DATA from '@data/constants/users.const';
import { ITitleh1 } from '@data/interfaces/title.metadata';
//import { UserInterfaz } from '@data/interfaces/user.metadata';
import { UserService } from '@data/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public titulo : ITitleh1 = {
    text:"Lista de Usuarios",
    type:'success'}

  //  public users: UserInterfaz[] = USERS_DATA

  users : any//UserInterfaz[]=[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.gotUsers();
  }

  gotUsers(){
    this.userService.getAllusers().subscribe({
      next: c => {
        this.users = c
        //console.log(c)
      },    
      error:error => {
        console.log(error)
        },
      complete:()=>{
        console.log('Request Complete')
      }  
    }           
    )
  }

}
