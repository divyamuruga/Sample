import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-routes-table',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./routes-table.html'
})
export class RoutesTable{

routes=[
{name:'R101',color:'red',visible:true,days:10,percent:85},
{name:'R203',color:'blue',visible:false,days:5,percent:40},
{name:'R311',color:'green',visible:true,days:8,percent:65}
]
}