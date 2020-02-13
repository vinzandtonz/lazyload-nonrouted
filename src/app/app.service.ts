import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  addConfig(config) {
    const newConfig = [
      ...config,
      {
        label: "field5",
        type: "checkbox",
        dataModelRef: "enableDocumentNumber"
      }
    ];
    return newConfig;
  }

  removeConfig(config) {
    let newConfig;
    if (config && config.length > 0) {
      config.length = config.length - 1;
      newConfig = [...config];
    }
    return newConfig;
  }

  changeDataModel(dataModel) {
    const newDataModel = {
      ...dataModel,
      documentName: "Changed document name"
    };
    return newDataModel;
  }
}
