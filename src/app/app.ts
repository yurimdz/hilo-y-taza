import { Component, OnInit } from '@angular/core';
import { ScrollAnimation } from './services/scroll-animation';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Experiences } from './components/experiences/experiences';
import { Menu } from './components/menu/menu';
import { Gallery } from './components/gallery/gallery';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

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
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private scrollAnimation: ScrollAnimation) {}

  ngOnInit() {
    setTimeout(() => this.scrollAnimation.init(), 300);
  }
}