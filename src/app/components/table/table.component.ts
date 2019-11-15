import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input("columns") columns: Array<string> = [];
  @Input("claims") claims: Array<Object> = [];
  @Input("openClaim") openClaim
  rows: Array<Object> = [];
  constructor() {}

  ngOnInit() {
    console.log("array", this.columns, this.rows);
  }
}
