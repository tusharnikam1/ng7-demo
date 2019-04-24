import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../../services/boards.service';
import { Board } from '../../../types/board';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../../../services/list.service';
import { List } from '../../../types/list';

@Component({
    selector: 'app-boards-details',
    templateUrl: './board.details.component.html'
})

export class BoardsDetailsComponent implements OnInit {
    constructor(
        private boardsService: BoardsService,
        private route: ActivatedRoute,
        private router: Router,
        private listService: ListService) {

    }

    board = {} as Board;

    private lists: List[] = [];

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.boardsService.get(params.id).subscribe((boardDetails: Board) => {
                this.board = boardDetails;
                this.listService.list(params.id).subscribe((boardLists: List[]) => {
                    this.lists = boardLists;
                });
            });
        });
    }
}
