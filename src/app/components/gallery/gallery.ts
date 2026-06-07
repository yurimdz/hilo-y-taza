import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FotoGaleria {
  id: number;
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  fotoActiva: number = 0;

  fotos: FotoGaleria[] = [
    { id: 1, url: 'assets/img/galeria1.jpg', alt: 'Café artesanal' },
    { id: 2, url: 'assets/img/galeria2.jpg', alt: 'Pintura de cerámica' },
    { id: 3, url: 'assets/img/galeria3.jpg', alt: 'Pulseras personalizadas' },
    { id: 4, url: 'assets/img/galeria4.jpg', alt: 'Postres del día' },
    { id: 5, url: 'assets/img/galeria5.jpg', alt: 'Ambiente del café' },
  ];

  fotoAbierta: FotoGaleria | null = null;

  abrir(foto: FotoGaleria) {
    this.fotoAbierta = foto;
  }

  cerrar() {
    this.fotoAbierta = null;
  }

  anterior() {
    this.fotoActiva = (this.fotoActiva - 1 + this.fotos.length) % this.fotos.length;
  }

  siguiente() {
    this.fotoActiva = (this.fotoActiva + 1) % this.fotos.length;
  }
}