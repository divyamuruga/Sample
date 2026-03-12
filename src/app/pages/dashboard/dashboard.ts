import { Component } from '@angular/core';
import { Toolbar } from '../../components/toolbar/toolbar';
import { FiltersPanel } from '../../components/filters-panel/filters-panel';
import { MapView } from '../../components/map-view/map-view';
import { RoutesTable } from '../../components/routes-table/routes-table';
import { CsvFolderList } from '../../components/csv-folder-list/csv-folder-list';
import { LogConsole } from '../../components/log-console/log-console';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Toolbar,
    FiltersPanel,
    MapView,
    RoutesTable,
    CsvFolderList,
    LogConsole
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
}