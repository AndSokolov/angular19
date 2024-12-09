import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { FiltersComponent } from "../components/filters/filters.component";
import { CustomTableComponent } from "../components/custom-table/custom-table.component";

@Component({
  selector: 'app-root',
  imports: [ MatButton, FiltersComponent, CustomTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  showFilters = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
