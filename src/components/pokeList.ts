import { Component } from './components';
import { Pokemon } from '../models/pokemon';
import { ApiRepo } from '../data/api.repo';
import { Card } from './card';
import '../scss/style.scss';

export class List extends Component {
  pokemons: Pokemon | undefined;
  repo: ApiRepo;
  page: number;
  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.page = 0;
    this.loadPokemons(this.page);
    this.template = this.createTemplate();
    this.render();
  }

  async loadPokemons(page: number) {
    try {
      this.pokemons = await this.repo.getPokemons(page);
      console.log(this.pokemons);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  render() {
    this.template = this.createTemplate();
    super.render();

    const listPokemons: string[] | undefined = this.pokemons?.results;
    return listPokemons?.map(
      (item) => new Card('.cards', JSON.stringify(item))
    );
  }

  createTemplate() {
    return `
    <ul class="cards"></ul>
    <div class="buttons-pages">
      <button class="button-back" type="button">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
      </button>
      <button class="button-next" type="button">
        Next <i class="fa fa-chevron-right" aria-hidden="true"></i> 
      </button>
    </div>`;
  }
}
