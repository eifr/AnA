import { Component, OnInit } from '@angular/core';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

import { Apt } from '../../apt';
import { AptService } from '../../apt.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-apt-table',
  templateUrl: './apt-table.component.html',
  styleUrls: ['./apt-table.component.scss']
})
export class AptTableComponent implements OnInit {
  apts: Apt[];

  displayedColumns: string[] = ['select', 'id', 'city', 'address', 'rooms'];
  dataSource = new MatTableDataSource<Apt>(this.apts);

  selection = new SelectionModel<Apt>(true, []);

  constructor(private aptService: AptService) { }

  ngOnInit() {
    this.getApts();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.apts.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.apts.forEach(row => this.selection.select(row));
  }

  getApts(): void {
    this.aptService.getApts()
      .subscribe(apts => this.apts = apts);
  }

  deleteSelectedApt() {
    this.selection.selected.forEach(apt => {

      this.aptService.deleteApt(apt)
        .subscribe(() => {
          this.getApts();
        });
    });

  }
}

