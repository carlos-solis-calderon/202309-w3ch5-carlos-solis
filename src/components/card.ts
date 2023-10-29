import { ApiRepo } from '../data/repo';
import { Pokemon } from '<model />type.t
import { Component } from './components';

export class Card extends Component {
  pokemon: Pokemon;
  repo: ApiRepo;
  id: number = 0;
  image: string = '';
  constructor(selector: string, pokemon: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.pokemon = { ...JSON.parse(pokemon) };
    (async () => {
      const pokemonDetails = await this.loadDetails();
      this.id = pokemonDetails.id;
      this.manageComponent();
    })();
  }

  manageComponent() {
    throw new Error('Method not implemented.');
  }

  async loadDetails(): Promise<any> {
    try {
      const responseDetails = await this.repo.loadDetailsPokemons(
        this.pokemon.url
      );

      return await responseDetails;
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  render() {
    super.render();
    this.template = this.createTemplate();

    const cardElement = document.createElement('li');
    cardElement.innerHTML = this.template;

    return cardElement;
  }

  createTemplate() {
    return `
    <li class="pokemon-card">
      <a href="">
      <p><span>ID:</span> ${this.id}</p>
      <img alt="Image pokémon ${this.pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.id}.gif">
      
      <p>${this.pokemon.name} </p>
      <!--<p><span>Owner:</span> ${this.pokemon.url} </p>-->
      </a>
    </li>
      `;
  }
}
