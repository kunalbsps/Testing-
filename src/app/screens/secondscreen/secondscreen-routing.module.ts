import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondscreenComponent } from './secondscreen.component';

const routes: Routes = [{ path: '', component: SecondscreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondscreenRoutingModule { }
