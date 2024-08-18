import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { Observable } from 'rxjs';
import { Category, Pie } from '../../models/pie';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
    //selectedCategory$ = this.pieService.selectedCategory$;
    //selectedPie$ = this.pieService.selectedPie$;

    selectedCategory$: Observable<Category>;
    selectedPie$: Observable<Pie | undefined>;

    constructor(private readonly pieService: PieService) {
        this.selectedCategory$ = this.pieService.selectedCategory$;
        this.selectedPie$ = this.pieService.selectedPie$;
    }
}
