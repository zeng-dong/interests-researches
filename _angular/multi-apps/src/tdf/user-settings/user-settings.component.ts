import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user-settings',

    templateUrl: './user-settings.component.html',
    styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent implements AfterViewInit {
    @ViewChild('form') form: NgForm | undefined;

    ngAfterViewInit() {
        console.log(this.form);
    }
}
