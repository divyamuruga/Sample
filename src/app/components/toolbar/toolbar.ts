import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-toolbar',
standalone:true,
imports:[FormsModule],
templateUrl:'./toolbar.html'
})
export class Toolbar{

rollupType='Daily'
serviceBucket='All'
zoomTo='Region'

startDate=''
endDate=''

rerollup(){
console.log("ReRollup triggered")
}

}