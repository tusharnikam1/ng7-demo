import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { AlertsService } from './alerts.service';
import { UserService } from './user.service';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private alertService: AlertsService, private userService: UserService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const token: string = localStorage.getItem('token');
        this.spinnerService.spinner.next(true);
        const token = this.userService.getUserToken();
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    this.spinnerService.spinner.next(false);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error.error.error, 'interceptor error');
                const httpError = error.error.error;
                this.spinnerService.spinner.next(false);
                this.alertService.alert.next({
                    type: 'error',
                    message: (httpError && httpError.message) ? httpError.message : 'Error Occured'
                });
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                return throwError(error);
            }));
    }
}
