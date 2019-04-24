import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsListComponent } from './list/boards.list.component';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsDetailsComponent } from './details/board.details.component';

@NgModule({
    declarations: [
        BoardsListComponent,
        BoardsDetailsComponent
    ],
    imports: [
        BoardsRoutingModule,
        CommonModule
    ]
})

export class BoardsModule { }
