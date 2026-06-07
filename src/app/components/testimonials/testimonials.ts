import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonio {
  id: number;
  nombre: string;
  texto: string;
  audio: string;
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
  audioActivo: number | null = null;
  audioElement: HTMLAudioElement | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    fetch('assets/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.testimonios = data.testimonios;
        this.cdr.detectChanges();
      });
  }

  toggleAudio(testimonio: Testimonio) {
    if (this.audioActivo === testimonio.id) {
      this.audioElement?.pause();
      this.audioActivo = null;
      return;
    }
    this.audioElement?.pause();
    this.audioElement = new Audio(testimonio.audio);
    this.audioElement.play();
    this.audioActivo = testimonio.id;
    this.audioElement.onended = () => this.audioActivo = null;
  }
}