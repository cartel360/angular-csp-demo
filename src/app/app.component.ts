import { Component } from '@angular/core';
import { UnsafeDemoComponent } from "./unsafe-demo/unsafe-demo.component";

@Component({
  selector: "app-root",
  imports: [UnsafeDemoComponent],
  template: `
    <h1>Angular CSP Demo</h1>
    <!-- Add this line to load the unsafe component immediately -->
    <app-unsafe-demo></app-unsafe-demo>
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-csp-demo";
}
