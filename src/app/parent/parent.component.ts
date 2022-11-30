import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  countryList:string[] = ["UAE","India"];
  selCountryFromClient:string = "";
  showValue = true;
  selOption = 'jkk';
  onChildClick(selCountry:string){
     this.selCountryFromClient = selCountry;
  }
}
