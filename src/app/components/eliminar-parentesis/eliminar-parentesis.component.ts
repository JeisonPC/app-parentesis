import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-parentesis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-parentesis.component.html',
  styleUrl: './eliminar-parentesis.component.css'
})
export class EliminarParentesisComponent {
  textoEntrada = ''
  textoResultado = ''
  eliminarParentesis(s: string): string {
    let resultado = '';
    let prevChar = '';

    for (let i = 0; i < s.length; i++) {
      if ((s[i] === '(' || s[i] === ')') && prevChar === s[i]) {
        // Si el caracter actual es un paréntes is (abierto o cerrado) y es igual al anterior, loomitimos
        continue;
      } else {
        // Si no, lo añadimos al resultado y actualizamos prevChar
        resultado += s[i];
        prevChar = s[i];
      }
    }

    return resultado;
  }

  // Método para vincular al input
  procesarTexto() {
    this.textoResultado = this.eliminarParentesis(this.textoEntrada);
  }

}
