import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { List } from '../components/pokemonList';

describe('Given List component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<ul></ul>';
    const list = new List('#app');
    test('Then it should be instance of list', () => {
      expect(list).toBeInstanceOf(List);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
