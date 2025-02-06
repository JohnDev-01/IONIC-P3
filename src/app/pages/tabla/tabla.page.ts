import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: false,
})
export class TablaPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  numero: number | null = null;
  tabla: string[] = [];

  generarTabla() {
    if (this.numero === null) {
      this.tabla = ['Por favor, ingresa un número válido.'];
      return;
    }

    this.tabla = [];
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }
}
