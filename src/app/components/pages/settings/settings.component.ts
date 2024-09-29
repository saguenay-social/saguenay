import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../ui/navbar/navbar.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
