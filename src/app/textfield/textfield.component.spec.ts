import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TextfieldComponent } from "./textfield.component";

describe("TextfieldComponent", () => {
  let component: TextfieldComponent;
  let fixture: ComponentFixture<TextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextfieldComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldComponent);
    component = fixture.componentInstance;
    component.config = {
      label: "field1",
      type: "textfield",
      enable: true,
      dataModelRef: "Receipt123"
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the textfield with the data", () => {
    const textbox = fixture.nativeElement.querySelector("#textboxInput");
    expect(textbox.value).toBe("Receipt123");
  });

  it("should render the textfield label with the config label", () => {
    const label = fixture.nativeElement.querySelector("label");
    expect(label.textContent).toBe("field1");
  });
});
