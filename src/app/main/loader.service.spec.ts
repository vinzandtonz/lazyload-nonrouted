import { TestBed } from "@angular/core/testing";

import { LoaderService } from "./loader.service";
import { SimpleChange, SimpleChanges } from "@angular/core";

fdescribe("LoaderService", () => {
  let service: LoaderService;

  const configWithChange: SimpleChanges = {
    config: {
      previousValue: undefined,
      currentValue: [
        {
          label: "field1",
          type: "textfield",
          enable: "enableDocumentName",
          dataModelRef: "documentName"
        }
      ],
      firstChange: true,
      isFirstChange: undefined
    },
    dataModel: {
      previousValue: undefined,
      currentValue: {
        documentName: "Receipt123",
        documentNumber: "10110023",
        documentOwner: "John Snow",
        enableDocumentName: true,
        enableDocumentNumber: false
      },
      firstChange: true,
      isFirstChange: undefined
    }
  };

  const configWithoutChange: SimpleChanges = {
    config: {
      previousValue: [
        {
          label: "field1",
          type: "textfield",
          enable: "enableDocumentName",
          dataModelRef: "documentName"
        }
      ],
      currentValue: [
        {
          label: "field1",
          type: "textfield",
          enable: "enableDocumentName",
          dataModelRef: "documentName"
        }
      ],
      firstChange: false,
      isFirstChange: undefined
    },
    dataModel: {
      previousValue: {
        documentName: "Receipt123",
        documentNumber: "10110023",
        documentOwner: "John Snow",
        enableDocumentName: true,
        enableDocumentNumber: false
      },
      currentValue: {
        documentName: "Receipt123",
        documentNumber: "10110023",
        documentOwner: "John Snow",
        enableDocumentName: true,
        enableDocumentNumber: false
      },
      firstChange: false,
      isFirstChange: undefined
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
