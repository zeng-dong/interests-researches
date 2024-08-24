import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'this is the 2nd app';

    users: any;

    constructor(private usersService: UsersService) {
        this.getUsers();
    }

    async getUsers() {
        console.log('getting users');
        try {
            console.log('inside getUsers()');
            this.users = await this.usersService.getUsers();
            console.log('users: ', this.users);
        } catch (e) {
            console.log(e);
        }
    }

    async displayData() {
        try {
            let response = await this.fetchData();
        } catch (e) {
            console.log(e);
        }
    }

    fetchData() {
        return new Promise((r) => {
            setTimeout(() => r('hello world'), 2000);
        });
    }
}
