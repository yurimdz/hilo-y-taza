import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Experiences } from './components/experiences/experiences';
import { Menu } from './components/menu/menu';
import { Gallery } from './components/gallery/gallery';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Experiences,
    Menu,
    Gallery,
    Testimonials,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}