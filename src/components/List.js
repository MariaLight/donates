import { Component } from '../core/Component';
import { ListItem } from './ListItem';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const listTitle = document.createElement('h2');
    listTitle.classList.add('donates-container__title');
    listTitle.textContent = 'Список донатов';
    this.$rootElement.appendChild(listTitle);

  }

  addItem(item) {
    this.$rootElement.append(item.$rootElement);
  }
  removeItem(item) {
    this.$rootElement.removeChild(item.$rootElement);
  }
}