import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // creating a structural directive
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // vcRef is ViewContainer reference to which this element will be assigned to
      // templateRef is the body of the element, on which the decision can be made thorugh this structural directive
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
