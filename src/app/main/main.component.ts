import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  OnDestroy
} from "@angular/core";
import { LoaderService } from "./loader.service";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { TextfieldComponent } from "../textfield/textfield.component";
import { ModuleType } from "./field.enums";
import { IConfigItem } from "./field.interface";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnChanges, OnDestroy {
  @ViewChild("container", { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  @Input() config;
  @Input() dataModel;

  componentRefs: ComponentRef<CheckboxComponent | TextfieldComponent>[] = [];
  factory;
  constructor(
    private loader: LoaderService,
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  async render() {
    this.loader.loadModules();
    this.renderComponents();
  }

  renderComponents() {
    const configCopy = JSON.parse(JSON.stringify(this.config));
    const dataModelCopy = JSON.parse(JSON.stringify(this.dataModel));
    const mappedConfig: IConfigItem[] = this.loader.mapConfig(
      configCopy,
      dataModelCopy
    );
    this.container.clear();
    let componentRef: ComponentRef<CheckboxComponent | TextfieldComponent>;
    (mappedConfig as Array<any>).forEach(conf => {
      if (conf.type === ModuleType.CHECKBOX) {
        const factory: ComponentFactory<CheckboxComponent> = this.resolver.resolveComponentFactory(
          CheckboxComponent
        );
        componentRef = this.container.createComponent(factory);
        componentRef.instance.config = conf;
      } else {
        const factory: ComponentFactory<TextfieldComponent> = this.resolver.resolveComponentFactory(
          TextfieldComponent
        );
        componentRef = this.container.createComponent(factory);
        componentRef.instance.config = conf;
      }
      this.componentRefs.push(componentRef);
    });
    this.cd.detectChanges();
  }

  ngOnChanges() {
    this.render();
  }

  ngOnDestroy(): void {
    if (this.componentRefs) {
      this.componentRefs.forEach(cr => cr.destroy());
    }
  }
}
