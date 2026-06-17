import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  ingredientes: string[];
  preparacion: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  items: MenuItem[] = [];
  categorias: string[] = [];
  categoriaActiva: string = 'Todos';
  
  idTarjetaVolteada: number | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  get itemsFiltrados(): MenuItem[] {
    if (this.categoriaActiva === 'Todos') {
      return this.items;
    }
    return this.items.filter(i => i.categoria === this.categoriaActiva);
  }

  ngOnInit() {
    fetch('/assets/data/data.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('No se pudo obtener el archivo de datos JSON');
        }
        return res.json();
      })
      .then(data => {
        if (data && data.menu) {
          this.items = data.menu;
          this.categorias = ['Todos', ...new Set<string>(data.menu.map((i: MenuItem) => i.categoria))];
          this.cdr.detectChanges(); // Fuerza la renderización inmediata en el HTML
        }
      })
      .catch(err => {
        console.error('Fallo crítico cargando la data del menú Hilo & Taza:', err);
      });
  }

  filtrar(categoria: string) {
    this.categoriaActiva = categoria;
    this.idTarjetaVolteada = null;
  }

  alternarDetalle(id: number) {
    if (this.idTarjetaVolteada === id) {
      this.idTarjetaVolteada = null; 
    } else {
      this.idTarjetaVolteada = id; 
    }
  }
}