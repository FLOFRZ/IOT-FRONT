import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMatchPage } from './new-match';

@NgModule({
  declarations: [
    NewMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMatchPage),
  ],
})
export class NewMatchPageModule {}
