import { Component } from '@angular/core';

@Component({
  selector: 'app-signal-in-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal-in-signal.component.html',
  styleUrl: './signal-in-signal.component.scss'
})
export class SignalInSignalComponent {

}


/*

import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import 'zone.js';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>ToDos</h2>
    <select (change)="onSelected($any($event.target).value)">
      <option value="">--Select a team member--</option>
      @for(member of members(); track member.id) {
        <option [value]=member.id>{{ member.name }}</option>
      }
    </select>
    <button (click)='onClick()'>New Item</button>

    @for(t of toDosForMember()(); track t.id) {
      <div>* {{ t.title}}</div>
    }
  `,
})
export class App {
  name = 'Angular';
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  teamUrl = "https://jsonplaceholder.typicode.com/users";

  http= inject(HttpClient);

  members = toSignal(this.http.get<Member[]>(this.teamUrl), {initialValue:[] });

  // Use signal and toObservable
  // selectedUserId = signal(0);
  // userId$ = toObservable(this.selectedUserId);
  // Or just use a Subject
  idSubject = new Subject<number>();
  id$ = this.idSubject.asObservable();

  rawTodosForMember = toSignal(this.getData(), {initialValue:[] });
  toDosForMember = computed(() => signal(this.rawTodosForMember()));

  getData() {
    return this.id$.pipe(
      switchMap(id => this.http.get<ToDo[]>(`${this.todoUrl}?userId=${id}`))
    );
  }

  onSelected(id: number) {
    //this.selectedUserId.set(userId);
    this.idSubject.next(id);
  }

  onClick() {
    const newToDo = {
      userId: 5,
      id: 0,
      title: 'finish this demo',
      completed: false
    }
    this.toDosForMember().update(t => [...t, newToDo]);
  }

}

bootstrapApplication(App, appConfig);

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface Member {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}
*/


/**
import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Subject, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private userUrl = "https://jsonplaceholder.typicode.com/users";

    private http= inject(HttpClient);

    users = toSignal(this.http.get<User[]>(this.userUrl), {initialValue:[] });
  }

  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
  }

import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Subject, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class TodoService {
    private todoUrl = 'https://jsonplaceholder.typicode.com/todos';

    private http= inject(HttpClient);

    private selectedIdSubject = new Subject<number>();
    private selectedId$ = this.selectedIdSubject.asObservable();

    // Data from the HTTP request
    private rawTodosForMember = toSignal(this.getData(), {initialValue:[] });
    // Signal containing a writable signal
    private todosForMember = computed(() => signal(this.rawTodosForMember()));
    // Read-only signal for display
    todosForDisplay = computed(() => this.todosForMember()())

    private getData() {
        return this.selectedId$.pipe(
            switchMap(id => this.http.get<ToDo[]>(`${this.todoUrl}?userId=${id}`))
        );
    }

    addNewItem() {
        const newToDo = {
            userId: 5,
            id: 0,
            title: 'finish this demo',
            completed: false
        }
        this.todosForMember().update(t => [...t, newToDo]);
    }

    getTodosForUser(userId: number) {
        this.selectedIdSubject.next(userId);
    }
  }

  export interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

import { Component, computed, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { TodoService } from './todo.service';
import 'zone.js';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>ToDos</h2>
    <select (change)="onSelected($any($event.target).value)">
      <option value="">--Select a user--</option>
      @for(user of users(); track user.id) {
        <option [value]=user.id>{{ user.name }}</option>
      }
    </select>
    <button (click)='onClick()'>New Item</button>

    @for(t of todosForUser(); track t.id) {
      <div>* {{ t.title}}</div>
    }
  `,
})
export class App {
  name = 'Angular';

  todoService = inject(TodoService);
  userService = inject(UserService);

  users = this.userService.users;
  todosForUser = this.todoService.todosForDisplay;

  onClick() {
    this.todoService.addNewItem();
  }

  onSelected(userId: number) {
    this.todoService.getTodosForUser(userId);
  }

}

bootstrapApplication(App, appConfig);

 */
