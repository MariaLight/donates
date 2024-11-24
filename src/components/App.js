import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: []
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this)
    });
    this.$rootElement.appendChild(donateForm.$rootElement);

    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.$donateList = donateList;

    const donateHeader = document.createElement('h1');
    const donateHeaderSpan = document.createElement('span');
    donateHeader.classList.add('total-amount');
    donateHeader.textContent = `Итого $`;
    donateHeaderSpan.textContent = this.state.total;
    donateHeader.append(donateHeaderSpan);
    this.$donateHeaderCount = donateHeaderSpan;
    this.$rootElement.prepend(donateHeader);


  }

  onItemCreate(amount) {
    this.$donateHeaderCount.textContent = Number(this.$donateHeaderCount.textContent) + amount;

    const listItem = new ListItem({ datetime: new Date(), amount: amount, onDelete: this.onItemDelete.bind(this) });
    this.$donateList.addItem(listItem);

    this.state.total = amount;
    this.state.donates.push(listItem);
  }
  onItemDelete(listItem) {
    console.log(listItem);
    this.$donateList.removeItem(listItem);

    const deletionAmount = listItem.props.amount;

    this.state.total = Number(this.$donateHeaderCount.textContent) - deletionAmount;
    this.$donateHeaderCount.textContent = this.state.total;


    this.state.donates.pop(listItem);
  }
}
