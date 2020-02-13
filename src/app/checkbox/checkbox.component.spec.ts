import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckboxComponent } from "./checkbox.component";

describe("CheckboxComponent", () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.config = {
      label: "field1",
      type: "checkbox",
      dataModelRef: true
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the checkbox with the data", () => {
    const checkbox = fixture.nativeElement.querySelector("#checkboxInput");
    expect(checkbox.checked).toBeTrue();
  });

  it("should render the checkbox label with the config label", () => {
    const label = fixture.nativeElement.querySelector("label");
    expect(label.textContent).toBe("field1");
  });
});
