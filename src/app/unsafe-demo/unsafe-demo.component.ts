import { Component } from '@angular/core';

@Component({
  selector: "app-unsafe-demo",
  imports: [],
  // Intentional XSS vulnerability for demo
  template: `
    <h2>Unsafe Demo</h2>
    <button (click)="executeEvil()">Click Me</button>
    <div [innerHTML]="userContent"></div>
    <p>
      This is an unsafe demo component. Clicking the button will execute
      JavaScript code that can be harmful.
    </p>
    <p>Check the console for CSP violations.</p>
    <button onclick="alert('Clicked!')">Try Me (Works in Dev)</button>
    <br />
    <button (click)="showAlert()">Try Me (Works in Dev & Prod)</button>
  `,
  styles: ``,
})
export class UnsafeDemoComponent {
  userContent = "";
  executeEvil() {
    this.userContent = '<script>alert("XSS Attack!")</script>';
  }
  showAlert() {
    alert("Clicked!");
  }
}
