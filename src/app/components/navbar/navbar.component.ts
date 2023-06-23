import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private stateService: StateService, private router: Router) {}

  user = this.stateService.user;
  validateCurrentRoute() {
    const currentUrl = this.router.routerState.snapshot.url;

    // Realiza la validación según la ruta actual
    if (currentUrl === '/login') {
      // Realiza alguna acción específica si la ruta actual es '/login'
    } else if (currentUrl === '/dashboard') {
      // Realiza alguna acción específica si la ruta actual es '/dashboard'
    } else {
      // Realiza alguna acción para otras rutas
    }
  }
}
