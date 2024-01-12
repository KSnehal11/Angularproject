import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  val : string = ""
  showSearch : boolean = true
  changeSearchVal(ele : Event) {
      
      this.val = ((<HTMLInputElement> ele.target).value);
      if(this.val)
      this.showSearch=false
      if(this.val==="")
      this.showSearch=true
      
  }
}
