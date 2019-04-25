import {AlertsService} from './alerts.service';
import { TestBed, async } from '@angular/core/testing';
import { Subject } from 'rxjs';

let service: AlertsService;

describe('AlertService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [AlertsService] });
    });

    it('default value should be equal to Subject', () => {
        service = TestBed.get(AlertsService);
        const newVal = new Subject();
        expect(service.alert).toEqual(newVal);
    });
});
