import {UserService} from './user.service';
import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { User } from '../types/user';

describe('User Service', () => {
    let service: UserService;
    let httpMock: HttpTestingController;
    const newUser: User = {first_name : 'john', last_name: 'doe', email: 'john@demo.com', password: 'demo'};
    const loggedInUser = {...newUser, id: 'daWQSWS7653BHGRDssOIU' }


    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule], providers: [UserService] });
        service = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add new user', () => {
        service.addUser(newUser).subscribe((userResponse) => {
            expect(userResponse).toEqual(newUser);
        });

        const req = httpMock.expectOne(`${environment.api_url}users`);
        expect(req.request.method).toBe('POST');
        req.flush(newUser);
    });

    it('should login new user', () => {

        service.login(newUser).subscribe((userDetails) => {
            expect(userDetails).toEqual(loggedInUser);
        });

        const req = httpMock.expectOne(`${environment.api_url}users/login`);
        expect(req.request.method).toBe('POST');
        req.flush(loggedInUser);
    });

    afterEach(() => {
        httpMock.verify();
    });

});
