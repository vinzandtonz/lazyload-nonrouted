import { TestBed } from "@angular/core/testing";

import { LoaderService } from "./loader.service";
import { SimpleChange, SimpleChanges } from "@angular/core";
import { IConfigItem } from "./field.interface";

describe("LoaderService", () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should map the config", () => {
    const actualConfig = [
      {
        label: "field1",
        type: "textfield",
        enable: "enableDocumentName",
        dataModelRef: "documentName"
      }
    ];

    const actualDatamodel = {
      documentName: "Receipt123",
      documentNumber: "10110023",
      documentOwner: "John Snow",
      enableDocumentName: true,
      enableDocumentNumber: false
    };

    const expected: IConfigItem[] = [
      {
        label: "field1",
        type: "textfield",
        enable: true,
        dataModelRef: "Receipt123"
      }
    ];

    expect(service.mapConfig(actualConfig, actualDatamodel)).toEqual(expected);
  });
});
