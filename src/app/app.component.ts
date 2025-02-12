import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cCauvery';

  user = "office.ccauvery";
  domain = "iisc.ac.in";
  get email(): string {
    return `${this.user}&#64;${this.domain}`;
  }

  get emailHref(): string {
    return `mailto:${this.user}@${this.domain}`;
  }
}
