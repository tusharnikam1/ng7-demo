import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class BoardsService {
    constructor(private http: HttpClient){}

    list(){
        return this.http.get(`${environment.api_url}boards`);
    }

    get(id: string) {
        return this.http.get(`${environment.api_url}boards/${id}`);
    }

}
