import { Component } from "@angular/core";

@Component({
  selector: "app-unsafe-demo",
  template: `
    <h2>Unsafe Demo</h2>

    <!-- 1. Inline JavaScript (Blocked by CSP) -->
    <button (click)="executeEvil()">Trigger XSS</button>
    <div [innerHTML]="userContent"></div>

    <!-- 2. Inline Style (Blocked if CSP restricts 'unsafe-inline') -->
    <p style="color: red; font-weight: bold">
      This red text will disappear if CSP blocks inline styles.
    </p>

    <!-- 3. Inline Event Handler (Blocked by CSP) -->
    <button onclick="alert('Inline JS blocked!')">
      Inline onclick handler
    </button>

    <!-- 4. Angular Event Binding (Allowed - sanitized by Angular) -->
    <button (click)="showAlert()">Angular (click) binding</button>

    <!-- 5. External Resource (Blocked if CSP restricts origins) -->
    <link rel="stylesheet" href="https://untrusted.com/malicious.css" />
  `,
  styles: [
    /* Component styles (allowed via Angular's CSS encapsulation) */
    `
      h2 {
        font-family: Arial;
      }
    `,
  ],
})
export class UnsafeDemoComponent {
  userContent = "";

  executeEvil() {
    // This will be blocked by CSP in production
    this.userContent = '<script>alert("XSS Attack!")</script>';
  }

  showAlert() {
    // This works because Angular sanitizes event bindings
    alert("This is allowed via Angular sanitization");
  }
}
