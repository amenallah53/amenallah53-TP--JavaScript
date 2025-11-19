import { Component, signal } from '@angular/core';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Profil } from './components/profil/profil';
import { Address } from './components/address/address';

@Component({
    selector: 'app-root',
    imports: [
      Utilisateur,
      Profil,
      Address
  ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('TP2');

}