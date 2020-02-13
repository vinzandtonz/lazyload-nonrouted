import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox.component";

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule],
  entryComponents: [CheckboxComponent]
})
export class CheckboxModule {
  getComponent() {
    return CheckboxComponent;
  }
}
