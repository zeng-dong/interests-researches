import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
    selector: 'app-user-settings',

    templateUrl: './user-settings.component.html',
    styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent implements AfterViewInit {
    @ViewChild('form') form: NgForm | undefined;
    originalUserSettings: UserSettings = {
        name: 'Michael',
        emailOffers: true,
        interfaceStyle: 'dark',
        subscriptionType: 'Annual',
        notes: 'here some some notes...',
    };

    userSettings = { ...this.originalUserSettings };

    ngAfterViewInit() {
        console.log(this.form);
    }
}
