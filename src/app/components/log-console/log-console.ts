import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-log-console',
standalone:true,
imports:[FormsModule],
templateUrl:'./log-console.html'
})
export class LogConsole{


logs=[
"Application started",
"Loading CSV folders",
"Rollup completed"
]

}