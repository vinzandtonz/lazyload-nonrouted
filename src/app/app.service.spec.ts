import { TestBed } from "@angular/core/testing";

import { AppService } from "./app.service";

describe("AppService", () => {
  let service: AppService;

  const config = [
    {
      label: "field1",
      type: "textfield",
      enable: "enableDocumentName",
      dataModelRef: "documentName"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should add a config", () => {
    const actualConfig = [
      {
        label: "field1",
        type: "textfield",
        enable: "enableDocumentName",
        dataModelRef: "documentName"
      }
    ];

    const expected = [
      {
        label: "field1",
        type: "textfield",
        enable: "enableDocumentName",
        dataModelRef: "documentName"
      },
      {
        label: "field5",
        type: "checkbox",
        dataModelRef: "enableDocumentNumber"
      }
    ];

    expect(service.addConfig(actualConfig)).toEqual(expected);
  });

  it("should remove the last element from the config", () => {
    const actualConfig = [
      {
        label: "field1",
        type: "textfield",
        enable: "enableDocumentName",
        dataModelRef: "documentName"
      },
      {
        label: "field2",
        type: "textfield",
        enable: "enableDocumentNumber",
        dataModelRef: "documentNumber"
      }
    ];

    const expected = [
      {
        label: "field1",
        type: "textfield",
        enable: "enableDocumentName",
        dataModelRef: "documentName"
      }
    ];

    expect(service.removeConfig(actualConfig)).toEqual(expected);
  });

  it("should change the datamodel", () => {
    const actualDatamodel = {
      documentName: "Receipt123",
      documentNumber: "10110023",
      documentOwner: "John Snow",
      enableDocumentName: true,
      enableDocumentNumber: false
    };

    const expected = {
      documentName: "Changed document name",
      documentNumber: "10110023",
      documentOwner: "John Snow",
      enableDocumentName: true,
      enableDocumentNumber: false
    };

    expect(service.changeDataModel(actualDatamodel)).toEqual(expected);
  });
});
