import { Component } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { Observable } from 'rxjs';
import { Pie } from '../../models/pie';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
    //pies$ = this.pieService.filteredPies$;
    //selectedPie$ = this.pieService.selectedPie$;

    pies$: Observable<Pie[]>;
    selectedPie$: Observable<Pie | undefined>;

    constructor(private readonly pieService: PieService) {
        this.pies$ = this.pieService.filteredPies$;
        this.selectedPie$ = this.pieService.selectedPie$;
    }

    selectPie(id: number) {
        this.selectedPie$ = this.pieService.selectedPie$;
        this.pieService.setSelectedPie(id);
    }
}
