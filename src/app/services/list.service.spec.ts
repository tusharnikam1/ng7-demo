import {ListService} from './list.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('List Service', () => {
    let service: ListService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports:[HttpClientTestingModule], providers: [ListService] });
        service = TestBed.get(ListService);
        httpMock = TestBed.get(HttpTestingController);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch lists based on board id ', () => {
        const dummyLists = [{name: 'Testing'}];
        const boardId = 'AqwxPTR24MJH23423';
        service.list(boardId).subscribe((boardLists) => {
            expect(boardLists).toEqual(dummyLists);
        });

        const req = httpMock.expectOne(`${environment.api_url}boards/${boardId}/lists`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyLists);
    });

    it('should fetch list details based on list id', () => {
        const listId = 'DxaqQM65HAVU71MNdftBRT';
        const dummyResponse = {name: 'Testing', id: listId};

        service.get(listId).subscribe((listDetails) => {
            expect(listDetails).toEqual(dummyResponse);
        });

        const req = httpMock.expectOne(`${environment.api_url}lists/${listId}`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyResponse);
    });

    afterEach(() => {
        httpMock.verify();
    });

});
