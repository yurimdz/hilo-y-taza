import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonio {
  id: number;
  nombre: string;
  rol: string;
  comentario: string;
  audio: string;
  calificacion: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials implements OnInit {
  testimonios: Testimonio[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    fetch('/assets/data/data.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.testimonios) {
          this.testimonios = data.testimonios;
          this.cdr.detectChanges();
        }
      })
      .catch(err => console.error('Error cargando testimonios:', err));
  }
}