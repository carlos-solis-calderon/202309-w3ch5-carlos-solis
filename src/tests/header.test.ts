import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from '../components/header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
      container = document.createElement('div');
      container.classList.add('container');
      document.body.appendChild(container);

      new Header('.container');
    });

    afterEach(() => {
      container.remove();
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});
