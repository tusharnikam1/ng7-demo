import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsListComponent } from './list/boards.list.component';
import {BoardsDetailsComponent} from './details/board.details.component';

const routes: Routes = [{
    path: '',
    component: BoardsListComponent
}, {
  path: ':id',
  component: BoardsDetailsComponent
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BoardsRoutingModule { }
