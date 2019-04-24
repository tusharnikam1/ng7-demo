import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AlertsService {
    alert = new Subject();
}
