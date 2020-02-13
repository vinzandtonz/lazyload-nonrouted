import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextfieldComponent } from "./textfield.component";

@NgModule({
  declarations: [TextfieldComponent],
  imports: [CommonModule]
})
export class TextfieldModule {
  getComponent() {
    return TextfieldComponent;
  }
}
