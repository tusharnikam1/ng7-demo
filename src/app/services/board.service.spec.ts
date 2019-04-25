import {BoardsService} from './boards.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('Board Service', () => {
    let service: BoardsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports:[HttpClientTestingModule], providers: [BoardsService] });
        service = TestBed.get(BoardsService);
        httpMock = TestBed.get(HttpTestingController);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch boards list ', () => {
        const dummyLists = [{name: 'Testing'}];
        service.list().subscribe((boardLists) => {
            expect(boardLists).toEqual(dummyLists);
        });

        const req = httpMock.expectOne(`${environment.api_url}boards`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyLists);
    });

    it('should fetch board details based on id', () => {
        const boardId = 'DxaqQM65HAVU71MNdftBRT';
        const dummyResponse = {name: 'Testing', id: boardId};

        service.get(boardId).subscribe((boardDetails) => {
            expect(boardDetails).toEqual(dummyResponse);
        });

        const req = httpMock.expectOne(`${environment.api_url}boards/${boardId}`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyResponse);
    });

    afterEach(() => {
        httpMock.verify();
    });

});
