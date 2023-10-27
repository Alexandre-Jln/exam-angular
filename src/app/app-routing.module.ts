import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CoinsComponent} from "./coins/coins.component";
import {CoinsModalComponent} from "./coins-modal/coins-modal.component";

const routes:Routes = [
    {path:"", component:CoinsComponent},
    {path:"coins-modal", component:CoinsModalComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
