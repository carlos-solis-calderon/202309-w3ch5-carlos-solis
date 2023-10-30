import { Component } from './components';

export class Button extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return ` 
    <div id="buttons">
      <button id="prev-button">Retroceder</button>
      <button id="next-button">Avanzar</button>
    </div>
    `;
  }
}
