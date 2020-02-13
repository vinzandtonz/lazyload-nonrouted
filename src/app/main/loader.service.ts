import { Injectable, SimpleChanges } from "@angular/core";
import { IDataModel, IConfigItem } from "./field.interface";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  constructor() {}

  async loadModules() {
    await import("../checkbox/checkbox.module").then(chk => chk.CheckboxModule);
    await import("../textfield/textfield.module").then(
      txt => txt.TextfieldModule
    );
  }

  mapConfig(config: IConfigItem[], dataModel: IDataModel): IConfigItem[] {
    return config.map(c => {
      const entries: [string, string][] = Object.entries(c);
      entries.forEach(e => {
        const configValue = e[0];
        const configKey = e[1];
        if (configKey in dataModel) {
          c[configValue] = dataModel[configKey];
        }
      });
      return { ...c };
    });
  }
}
