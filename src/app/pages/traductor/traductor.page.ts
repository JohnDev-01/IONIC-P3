import { Component } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: false,
})
export class TraductorPage {
  numero: number | null = null;
  resultado: string = '';

  convertirNumero() {
    if (this.numero === null || this.numero < 0) {
      this.resultado =
        'Por favor, ingresa un número válido (mayor o igual a 0).';
      return;
    }
    this.resultado = this.numeroALetras(this.numero);
  }

  numeroALetras(numero: number): string {
    const unidades = [
      '',
      'uno',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis',
      'siete',
      'ocho',
      'nueve',
    ];
    const especiales = [
      'diez',
      'once',
      'doce',
      'trece',
      'catorce',
      'quince',
      'dieciséis',
      'diecisiete',
      'dieciocho',
      'diecinueve',
    ];
    const decenas = [
      '',
      '',
      'veinte',
      'treinta',
      'cuarenta',
      'cincuenta',
      'sesenta',
      'setenta',
      'ochenta',
      'noventa',
    ];
    const centenas = [
      '',
      'cien',
      'doscientos',
      'trescientos',
      'cuatrocientos',
      'quinientos',
      'seiscientos',
      'setecientos',
      'ochocientos',
      'novecientos',
    ];

    if (numero === 0) return 'cero';

    let letras = '';

    const grupos = [];
    while (numero > 0) {
      grupos.push(numero % 1000);
      numero = Math.floor(numero / 1000);
    }

    const nombresMiles = [
      '',
      'mil',
      'millón',
      'mil millones',
      'billón',
      'mil billones',
    ];

    grupos.forEach((grupo, i) => {
      if (grupo > 0) {
        const textoGrupo = this.convertirGrupo(
          grupo,
          unidades,
          especiales,
          decenas,
          centenas
        );
        const sufijo = nombresMiles[i];

        if (sufijo === 'mil' && textoGrupo === 'uno') {
          letras = `${sufijo} ${letras}`.trim();
        } else {
          letras = `${textoGrupo} ${sufijo} ${letras}`.trim();
        }
      }
    });

    return letras.trim();
  }

  convertirGrupo(
    grupo: number,
    unidades: string[],
    especiales: string[],
    decenas: string[],
    centenas: string[]
  ): string {
    const centena = Math.floor(grupo / 100);
    const restoCentena = grupo % 100;
    const decena = Math.floor(restoCentena / 10);
    const unidad = restoCentena % 10;

    let texto = '';

    if (centena > 0) {
      texto += centenas[centena];
      if (restoCentena > 0) texto += ' ';
    }

    if (restoCentena >= 10 && restoCentena < 20) {
      texto += especiales[restoCentena - 10];
    } else {
      if (decena > 0) {
        texto += decenas[decena];
        if (unidad > 0) texto += ' y ';
      }
      if (unidad > 0 || restoCentena < 10) {
        texto += unidades[unidad];
      }
    }

    return texto.trim();
  }
}
