import {SpinnerService} from './spinner.service';
import { TestBed, async } from '@angular/core/testing';
import { Subject } from 'rxjs';

let service: SpinnerService;

describe('SpinnerService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [SpinnerService] });
    });

    it('default value should be equal to Subject', () => {
        service = TestBed.get(SpinnerService);
        const newVal = new Subject();
        expect(service.spinner).toEqual(newVal);
    });
});
