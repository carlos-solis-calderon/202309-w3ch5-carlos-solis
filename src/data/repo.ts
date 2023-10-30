import { Pokemon } from '../model/type';

export class ApiRepo {
  getPokemons(
    _page: number
  ): Pokemon | PromiseLike<Pokemon | undefined> | undefined {
    throw new Error('Method not implemented.');
  }

  loadDetailsPokemons(_url: any) {
    throw new Error('Method not implemented.');
  }

  querySelector() {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  async getPoke(): Promise<Pokemon[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
