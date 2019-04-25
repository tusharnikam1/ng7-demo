import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class ListService {
    constructor(private http: HttpClient) {}

    list(boardId: string) {
        return this.http.get(`${environment.api_url}boards/${boardId}/lists`);
    }

    get(id: string) {
        return this.http.get(`${environment.api_url}lists/${id}`);
    }

}
