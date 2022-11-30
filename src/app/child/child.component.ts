import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
//@Input() countryName:string = "";
styleDiv = {'background-color':'red'};
@Input("country") countryName:string = "";
@Output() selectedCountryName = new EventEmitter<string>();

/****Directives***/
isVisible = true;
isActive = false;

selectedClasses = {
'isActive' : this.isActive,
'show':this.isVisible,
'hide':!this.isVisible

}

selectedProduct = {
  Name:'PC',
  id:null
}

selectedStyle = {'border':'1px solid red', 'background-color':'yellow'}

onCountryClick(countryName:string){
//alert("the clicked country is "+countryName);

this.selectedCountryName.emit(countryName);
}


}
