import { Component } from './components';
import '../scss/style.scss';

export class Header extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="main-header">
              <img class="img-title" src="/pokemon.svg" alt="${this.title}">
              <img class="img-subtitle" src="/animation.gif" alt="pokémon animation"
            </header>`;
  }
}
