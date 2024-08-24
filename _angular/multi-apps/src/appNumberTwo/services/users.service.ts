import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    getUsers() {
        return lastValueFrom(
            this.http.get('https://jsonplaceholder.typicode.com/users')
        );
    }
}
