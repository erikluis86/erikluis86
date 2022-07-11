import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch:'full'
  },
  {
    path:'auth',  //aki va directo al componente porq no tenemos layout
    loadChildren:()=>import('@modules/auth/auth.module').then(x => x.AuthModule)
  },
  {
    path:'panel', component: SkeletonComponent,
    children:[
      {
        path:'users',
        loadChildren:()=>
        import('@modules/user/user.module').then((m)=>m.UserModule)
      },
     /* {
        path:'**',
        redirectTo:'/auth/login',
        pathMatch:'full'
      }*/
    ]
  },
  {
    path:'**',
    redirectTo:'/auth/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
