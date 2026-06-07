import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: number;
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

  constructor(private cdr: ChangeDetectorRef) {}

  get itemsFiltrados(): MenuItem[] {
    if (this.categoriaActiva === 'Todos') return this.items;
    return this.items.filter(i => i.categoria === this.categoriaActiva);
  }

  ngOnInit() {
    fetch('assets/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.items = data.menu;
        this.categorias = ['Todos', ...new Set<string>(data.menu.map((i: MenuItem) => i.categoria))];
        this.cdr.detectChanges();
      });
  }

  filtrar(categoria: string) {
    this.categoriaActiva = categoria;
  }
}