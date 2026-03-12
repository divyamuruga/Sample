import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-csv-folder-list',
standalone:true,
imports:[CommonModule],
templateUrl:'./csv-folder-list.html'
})
export class CsvFolderList{

folders=[
{folder:'JanWeek1',start:'2024-01-01',end:'2024-01-07',days:7,cached:'12:30'},
{folder:'JanWeek2',start:'2024-01-08',end:'2024-01-14',days:7,cached:'12:45'}
]

}