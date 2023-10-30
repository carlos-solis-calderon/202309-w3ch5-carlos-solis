import { Component } from './components';

export class Navigator extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <section class="list-generator">
        <div class="nav-buttons">
          <li><button class="prev">Previous</button></li>
          <li><button class="next">Next</button></li>
        </div>
        <div class="pagination">
          <label for="poke-items">Pokemons per page
            <select name="poke" id="poke-items">
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
            </select>
          </label>
        </div>
      </section>
    `;
  }
}
