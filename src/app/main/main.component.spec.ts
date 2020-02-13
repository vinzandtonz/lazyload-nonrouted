import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MainComponent } from "./main.component";
import { TextfieldModule } from "../textfield/textfield.module";
import { CheckboxModule } from "../checkbox/checkbox.module";
import config from "../config/config.json";
import dataModel from "../config/datamodel.json";

describe("MainComponent", () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxModule, TextfieldModule],
      declarations: [MainComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    component.config = config;
    component.dataModel = dataModel;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("render the components", () => {
    component.render();
    const checkboxesRenedered = fixture.nativeElement.querySelectorAll(
      "input[type=checkbox]"
    ).length;
    const textfieldsRendered = fixture.nativeElement.querySelectorAll(
      "input[type=text]"
    ).length;
    expect(checkboxesRenedered).toBe(2);
    expect(textfieldsRendered).toBe(3);
  });
});
