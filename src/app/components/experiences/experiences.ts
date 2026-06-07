import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experiencia {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  precio: number;
  icono: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
export class Experiences implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    fetch('assets/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.experiencias = data.experiencias;
        this.cdr.detectChanges();
      });
  }
}