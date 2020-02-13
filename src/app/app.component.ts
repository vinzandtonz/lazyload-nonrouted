import { Component, OnInit } from "@angular/core";
import config from "./config/config.json";
import dataModel from "./config/datamodel.json";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "lazy";
  config;
  dataModel;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.config = config;
    this.dataModel = dataModel;
  }

  addConfig() {
    this.config = this.appService.addConfig(this.config);
  }

  removeConfig() {
    this.config = this.appService.removeConfig(this.config);
  }

  changeDataModel() {
    this.dataModel = this.appService.changeDataModel(this.dataModel);
  }
}
