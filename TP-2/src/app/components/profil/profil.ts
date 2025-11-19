import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Utilisateur {
  prenom: string,
  age: number    
}

@Component({
  selector: 'app-profil',
  imports: [FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})

export class Profil {
  utilisateur: Utilisateur = {
    prenom: '',
    age: 0
  }
}
