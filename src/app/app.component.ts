import { Component } from '@angular/core';

function log(target, name, descriptor)  {
  const original =descriptor.value;

  descriptor.value = function(...args) {
    const result = original.apply(this, args)
      console.log("The result is ", result )
    
  return result;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualar-boilerplate';

  constructor(){
   console.log(this.aSimpleMethod(6)) 
  }

  @log
  aSimpleMethod(a){
    return a*a
  }
}
