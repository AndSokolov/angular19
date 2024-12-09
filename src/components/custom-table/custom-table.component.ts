import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import { DatePipe } from "@angular/common";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-custom-table',
  imports: [
    MatTable,
    MatColumnDef,
    DatePipe,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatButton,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow
  ],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent {
  displayedColumns = ['created_at', 'status', 'key', 'actions'];
  dataSource = new MatTableDataSource([
    { created_at: Date.now(), status: 'open', key: 'randomkey2313' },
    { created_at: Date.now(), status: 'open', key: 'randomkey2317' }
  ]);
}
