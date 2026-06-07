import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormData {
  nombre: string;
  email: string;
  experiencia: string;
  mensaje: string;
}

interface FormErrores {
  nombre: string;
  email: string;
  experiencia: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  form: FormData = { nombre: '', email: '', experiencia: '', mensaje: '' };
  errores: FormErrores = { nombre: '', email: '', experiencia: '', mensaje: '' };
  enviado = false;

  validar(): boolean {
    let valido = true;
    this.errores = { nombre: '', email: '', experiencia: '', mensaje: '' };

    if (!this.form.nombre.trim()) {
      this.errores.nombre = 'El nombre es requerido.';
      valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.form.email.trim()) {
      this.errores.email = 'El correo es requerido.';
      valido = false;
    } else if (!emailRegex.test(this.form.email)) {
      this.errores.email = 'Ingresá un correo válido.';
      valido = false;
    }

    if (!this.form.experiencia) {
      this.errores.experiencia = 'Seleccioná una experiencia.';
      valido = false;
    }

    if (!this.form.mensaje.trim()) {
      this.errores.mensaje = 'El mensaje es requerido.';
      valido = false;
    } else if (this.form.mensaje.trim().length < 10) {
      this.errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
      valido = false;
    }

    return valido;
  }

  enviar() {
    if (this.validar()) {
      this.enviado = true;
      this.form = { nombre: '', email: '', experiencia: '', mensaje: '' };
    }
  }
}