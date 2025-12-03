import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student, Students } from '../../models/students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {

  isLoggedIn = false;
  loginName = '';
  listStudents: Student[] = Students;
  message = '';

  constructor(private router: Router) {}

  toggleLogin() {
    console.log("students", this.listStudents);

    const name = this.loginName.trim().toLowerCase();

    if (name && this.listStudents.find(s => s.name.trim().toLowerCase() === name)) {
      this.isLoggedIn = true;
      this.message = `Bienvenue, ${this.loginName}!`;

      // ✅ Now router works
      this.router.navigate(['articles']);
      
    } else {
      this.message = 'Nom incorrect — entre ton prénom exact pour te connecter.';
      this.isLoggedIn = false;
    }
  }
}
