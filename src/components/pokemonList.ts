import { Component } from './components';
import { Pokemon } from '../model/type';
import { ApiRepo } from '../data/repo';
import { Card } from './card';

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
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  clear() {
    throw new Error('Method not implemented.');
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    console.log('LISTA CON CARDS DE POKEMON');
    console.log(this.pokemons);

    const listPokemons: string[] | undefined = this.pokemons?.results;
    return listPokemons?.map(
      (item) => new Card('.cards', JSON.stringify(item))
    );
  }

  createTemplate() {
    return `
    <ul class="cards"></ul>
    `;
  }
}
