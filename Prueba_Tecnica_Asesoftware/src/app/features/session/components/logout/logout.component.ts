import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private router: Router) {
    localStorage.removeItem('login');
    this.verifySession();
  }

  verifySession(): void {
    if (localStorage.getItem('login') != 'true') {
      this.router.navigate(['/sesion/inicio-sesion']);
    }
  }

}
