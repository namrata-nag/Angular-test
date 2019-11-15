import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input("searchText") searchString: string;
  searchFilter: string;
  constructor() {}

  ngOnInit() {}
}
