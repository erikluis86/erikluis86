import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/panel/users',
    pathMatch:'full'
  },
  {
    path:'panel', component: SkeletonComponent,
    children:[
      {
        path:'users',
        loadChildren:()=>
        import('@modules/user/user.module').then((m)=>m.UserModule)
      },
      {
        path:'**',
        redirectTo:'/panel/users',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'/panel/users',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
