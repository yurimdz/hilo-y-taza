import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FotoGaleria {
  id: number;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit {
  fotos: FotoGaleria[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    fetch('/assets/data/data.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.galeria) {
          this.fotos = data.galeria;
          this.cdr.detectChanges();
        }
      })
      .catch(err => console.error('Error cargando la galería:', err));
  }
}