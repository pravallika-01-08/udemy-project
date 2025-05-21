import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 




@Component({
  selector: 'app-login-page',
  imports: [FormsModule], 
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
 email: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  

  onSubmit(): void {
    if (!this.email) {
      alert('Please enter a valid email.');
      return;
    }

    const payload = { email: this.email };

    this.http.post('http://localhost:8080/api/users/login', payload).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/plans-pricing']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      },
    });
  }
}
