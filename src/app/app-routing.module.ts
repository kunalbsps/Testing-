import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from '../app/screens/header/header.component';
import { LoginpreventGuard } from './Guards/loginprevent.guard';


const routes: Routes = [
  { 
    path: 'header', component:HeaderComponent,
children:[
  
  { path: 'landingpage', loadChildren: () => import('./screens/landingpage/landingpage.module').then(m => m.LandingpageModule),canActivate:[LoginpreventGuard] },
  { path: 'secondscreen', loadChildren: () => import('./screens/secondscreen/secondscreen.module').then(m => m.SecondscreenModule),canActivate:[LoginpreventGuard] },
  { path: 'loginpage', loadChildren: () => import('./screens/loginpage/loginpage.module').then(m => m.LoginpageModule) }, 
]

},
{ path: '', redirectTo: '/header/loginpage', pathMatch: "full" },
 
{ path: '**', redirectTo: '/header/loginpage', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
