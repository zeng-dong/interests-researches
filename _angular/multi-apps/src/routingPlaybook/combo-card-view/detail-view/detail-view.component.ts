import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { Observable } from 'rxjs';
import { Pie } from '../../models/pie';

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
    //selectedPie$ = this.pieService.selectedPie$;
    selectedPie$: Observable<Pie | undefined>;
    constructor(private readonly pieService: PieService) {
        this.selectedPie$ = this.pieService.selectedPie$;
    }
}
