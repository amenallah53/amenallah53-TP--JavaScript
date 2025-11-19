import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isLoggedIn: boolean = false;
  username: string = "";

  toggleLogin() {
    if (this.username === "TonPrenom") {
      this.isLoggedIn = !this.isLoggedIn;
    } else {
      alert("Nom incorrect !");
    }
  }
}
