import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SpinnerService {
    spinner = new Subject();
}
