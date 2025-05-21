import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  fullName: string = '';
  email: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    if (!this.fullName || !this.email) {
      alert('Please enter your full name and email.');
      return;
    }

    const payload = {
      fullName: this.fullName,
      email: this.email,
    };

    this.http.post('http://localhost:8080/api/users/signup', payload, { responseType: 'text' as 'json' }).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        alert('Signup successful!');
        this.router.navigate(['/plans-pricing']);
      },
      error: (error) => {
        console.error('Signup failed:', error);
        alert('Signup failed. Please try again.');
      },
    });
  }
}
