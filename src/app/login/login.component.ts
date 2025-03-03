import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginService = inject(LoginService);
  router = inject(Router);

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.loginService.login(this.username, this.password).subscribe({
      next: response => {
        console.log('Login successful:', response);
      },
      error: error => {
        console.error('Login failed:', error);
      },
      complete: () => {
        console.log('Login request completed.');
        this.router.navigate(['/main-page']);
      }
  });
  }
}
