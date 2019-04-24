import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../../services/boards.service';
import { Board } from '../../../types/board';


@Component({
    selector: 'app-boards-list',
    templateUrl: './boards.list.component.html'
})

export class BoardsListComponent implements OnInit {
    constructor(private boardsService: BoardsService) { }
    private boards: Board[] = [];
    ngOnInit() {
        this.boardsService.list().subscribe((boards: Board[]) => {
            this.boards = boards;
            console.log(boards, 'All boards loaded');
        });
    }
}
