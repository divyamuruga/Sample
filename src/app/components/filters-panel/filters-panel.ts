import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters-panel.html'
})
export class FiltersPanel {

showCells=true
showStops=true
togetherness=false

cellLabel='Compact'

threshold1=90
threshold2=90
threshold3=90

}