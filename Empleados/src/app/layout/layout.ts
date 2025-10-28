import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,              // 🔹 Indica que este componente es independiente
  imports: [RouterOutlet],       // 🔹 Importa RouterOutlet correctamente
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {}
